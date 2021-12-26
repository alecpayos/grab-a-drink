from flask import Flask, render_template, request

app = Flask(__name__,
            static_url_path='',
            static_folder='../app/build',
            template_folder='../app/build')

@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def error(e):
    return render_template('index.html')

workoutPlan = {
        "lightWorkout": "",
        "moderateWorkout": "",
        "intenseWorkout": "",
        "bmi": None,
        "classification": ""
    }
@app.route('/stream', methods=['GET', 'POST'])
def processInputs():
    if request.method == 'POST':
        userFirstName = request.json['firstName']
        userLastName = request.json['lastName']
        userBirthdate = request.json['dateValue']
        userWeight = request.json['weight']
        userHeight = request.json['height']
        userAge = request.json['age']

        bmi = float(userWeight) / ((float(userHeight) / 100) * (float(userHeight) / 100))
        workoutPlan['bmi'] = round(bmi, 2)

        if bmi < 18.5:
            workoutPlan["classification"] = "UNDERWEIGHT"
        if 18.5 <= bmi <= 24.9:
            workoutPlan["classification"] = "NORMAL"
        if 25 <= bmi <= 29.9:
            workoutPlan["classification"] = "OVERWEIGHT"
        if bmi >= 30:
            workoutPlan["classification"] = "OBESE"

        if 0 <= int(userAge) <= 3:
            workoutPlan["lightWorkout"] = "20-30 mins of active play daily until 4-7 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
            workoutPlan["moderateWorkout"] = "40-60 mins of active play daily until 4-7 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
            workoutPlan["intenseWorkout"] = "60-90 mins of active play daily until 4-7 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
        elif 4 <= int(userAge) <= 7:
            workoutPlan["lightWorkout"] = "60-90 minutes of active play daily until 8-11 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
            workoutPlan["moderateWorkout"] = "90-120 minutes of active play daily until 8-11 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
            workoutPlan["intenseWorkout"] = "120-180 minutes of active play daily until 8-11 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
        elif 8 <= int(userAge) <= 11:
            workoutPlan["lightWorkout"] = "Maximum of 30-60 mins of light muscle strengthening exercises 3 times a week. Exercises may be done either individually or a combination of: (1) burpees, (2) cartwheels, (3) supermans, (4) squat jumps, or (5) inclined pushups."
            workoutPlan["moderateWorkout"] = "Maximum of 60-90 minutes of light muscle strengthening exercises 3 times a week. Exercises may be done either individually or a combination of: (1) burpees, (2) cartwheels, (3) supermans, (4) squat jumps, or (5) inclined pushups."
            workoutPlan["intenseWorkout"] = "Maximum of 90-120 minutes of light muscle strengthening exercises 3 times a week. Exercises may be done either individually or a combination of: (1) burpees, (2) cartwheels, (3) supermans, (4) squat jumps, or (5) inclined pushups."
        elif (12 <= int(userAge) <= 25) and (bmi < 18.5):
            workoutPlan["lightWorkout"] = "10-20 minutes of brisk walking, 10-20minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "15-30 minutes of running, 10 reps 3 sets of squats, 10 reps 3 sets of sit-ups, 5 reps 2 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 10kg weight, 10 reps 3 sets of chest press with at least 10kg weight, 10 reps 3 sets of deadlifts with at least 10kg weight"
        elif (12 <= int(userAge) <= 25) and (18.5 <= bmi <= 24.9):
            workoutPlan["lightWorkout"] = "15-25 minutes of brisk walking, 15-25 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "20-35 minutes of running,15 reps 3 sets of squats, 15 reps 3 sets of sit-ups, 10 reps 2 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 15kg weight, 10 reps 3 sets of chest press with at least 15kg weight, 10 reps 3 sets of deadlifts with at least 15kg weight"
        elif (12 <= int(userAge) <= 25) and (25 <= bmi <= 29.9):
            workoutPlan["lightWorkout"] = "30-40 minutes of brisk walking, 30-40 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "30-45 minutes of running,25 reps 3 sets of squats, 25 reps 3 sets of sit-ups, 20 reps 3 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "5 reps 2 sets of squats with at least 20kg weight, 5 reps 2 sets of chest press with at least 20kg weight, 5 reps 2 sets of deadlifts with at least 20kg weight"
        elif (12 <= int(userAge) <= 25) and (bmi >= 30):
            workoutPlan["lightWorkout"] = "45-60 minutes of brisk walking, 45-60 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "45-60 minutes of running,30 reps 3 sets of squats, 30 reps 3 sets of sit-ups, 25 reps 3 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "5 reps 2 sets of squats with at least 25kg weight, 5 reps 2 sets of chest press with at least 25kg weight, 5 reps 2 sets of deadlifts with at least 25kg weight"
        elif (26 <= int(userAge) <= 40) and (bmi < 18.5):
            workoutPlan["lightWorkout"] = "Run 3km, Cycle 6km"
            workoutPlan["moderateWorkout"] = "2 minutes 2 sets planking, 10 reps 3 sets 90-degree pushups, 15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 25kg weight, 10 reps 3 sets of chest press with at least 25kg weight, 10 reps 3 sets of deadlifts with at least 25kg weight, 12 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (18.5 <= bmi <= 24.9):
            workoutPlan["lightWorkout"] = "Run 4km, Cycle 7km"
            workoutPlan["moderateWorkout"] = "2-4 minutes 2 sets planking, 10 reps 3 sets 90-degree pushups, 15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "15 reps 3 sets of squats with at least 25kg weight, 15 reps 3 sets of chest press with at least 25kg weight, 15 reps 3 sets of deadlifts with at least 25kg weight, 15 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (25 <= bmi <= 29.9):
            workoutPlan["lightWorkout"] = "Run 5km, Cycle 8km"
            workoutPlan["moderateWorkout"] = "3-5 minutes 3 sets planking, 10 reps 3 sets 90-degree pushups, 15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "20 reps 3 sets of squats with at least 25kg weight, 20 reps 3 sets of chest press with at least 25kg weight, 20 reps 3 sets of deadlifts with at least 25kg weight, 20 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (bmi >= 30):
            workoutPlan["lightWorkout"] = "Run 6km, Cycle 9km"
            workoutPlan["moderateWorkout"] = "3-5 minutes 3 sets planking, 10 reps 3 sets 90-degree pushups, 15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "25 reps 3 sets of squats with at least 25kg weight, 25 reps 3 sets of chest press with at least 25kg weight, 25 reps 3 sets of deadlifts with at least 25kg weight, 25 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (41 <= int(userAge) <= 70):
            workoutPlan["lightWorkout"] = "30-60 mins of brisk walking, 5-10 reps 2 sets of lunges"
            workoutPlan["moderateWorkout"] = "60-90 mins of brisk walking, 15-20 reps 2 sets of lunges"
            workoutPlan["intenseWorkout"] = "90-120 mins of brisk walking, 25-30 reps 2 sets of lunges"

        return workoutPlan
        
    elif request.method == 'GET':
        return workoutPlan

if __name__ == "__main__":
    app.run() 
