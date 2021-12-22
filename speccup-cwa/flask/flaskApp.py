from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__,
            static_url_path='',
            static_folder='../app/build',
            template_folder='../app/build')

CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def handleError():
    return render_template('index.html')

workoutPlan = {
        "lightWorkout": "",
        "moderateWorkout": "",
        "intenseWorkout": "",
        "bmi": None
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

        if 0 <= int(userAge) <= 3:
            workoutPlan["lightWorkout"] = "60-90 mins of active play daily until 4-7 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
        elif 4 <= int(userAge) <= 7:
            workoutPlan["lightWorkout"] = "120-180 minutes of active play daily until 8-11 years old. Exercises may be done either individually or a combination of: (1) long walks, (2) running, or (3) jumping."
        elif 8 <= int(userAge) <= 11:
            workoutPlan["lightWorkout"] = "Maximum of 1-2 hours of light muscle strengthening exercises 3 times a week. Exercises may be done either individually or a combination of: (1) burpees, (2) cartwheels, (3) supermans, (4) squat jumps, or (5) inclined pushups."
        elif (12 <= int(userAge) <= 25) and (bmi < 18.5):
            workoutPlan["lightWorkout"] = "10-20 minutes of brisk walking\n10-20minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "15-30 minutes of running\n10 reps 3 sets of squats\n10 reps 3 sets of sit-ups\n5 reps 2 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 10kg weight\n10 reps 3 sets of chest press with at least 10kg weight\n10 reps 3 sets of deadlifts with at least 10kg weight"
        elif (12 <= int(userAge) <= 25) and (18.5 <= bmi <= 24.9):
            workoutPlan["lightWorkout"] = "15-25 minutes of brisk walking\n15-25 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "20-35 minutes of running\n15 reps 3 sets of squats\n15 reps 3 sets of sit-ups\n10 reps 2 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 15kg weight\n10 reps 3 sets of chest press with at least 15kg weight\n10 reps 3 sets of deadlifts with at least 15kg weight"
        elif (12 <= int(userAge) <= 25) and (25 <= bmi <= 29.9):
            workoutPlan["lightWorkout"] = "30-40 minutes of brisk walking\n30-40 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "30-45 minutes of running\n25 reps 3 sets of squats\n25 reps 3 sets of sit-ups\n20 reps 3 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "5 reps 2 sets of squats with at least 20kg weight\n5 reps 2 sets of chest press with at least 20kg weight\n5 reps 2 sets of deadlifts with at least 20kg weight"
        elif (12 <= int(userAge) <= 25) and (bmi >= 30):
            workoutPlan["lightWorkout"] = "45-60 minutes of brisk walking\n45-60 minutes of leisure cycling"
            workoutPlan["moderateWorkout"] = "45-60 minutes of running\n30 reps 3 sets of squats\n30 reps 3 sets of sit-ups\n25 reps 3 sets of inclined pushups"
            workoutPlan["intenseWorkout"] = "5 reps 2 sets of squats with at least 25kg weight\n5 reps 2 sets of chest press with at least 25kg weight\n5 reps 2 sets of deadlifts with at least 25kg weight"
        elif (26 <= int(userAge) <= 40) and (bmi < 18.5):
            workoutPlan["lightWorkout"] = "Run 3km\nCycle 6km"
            workoutPlan["moderateWorkout"] = "2 minutes 2 sets planking\n10 reps 3 sets 90-degree pushups\n15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "10 reps 3 sets of squats with at least 25kg weight\n10 reps 3 sets of chest press with at least 25kg weight\n10 reps 3 sets of deadlifts with at least 25kg weight\n12 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (18.5 <= bmi <= 24.9):
            workoutPlan["lightWorkout"] = "Run 4km\nCycle 7km"
            workoutPlan["moderateWorkout"] = "2-4 minutes 2 sets planking\n10 reps 3 sets 90-degree pushups\n15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "15 reps 3 sets of squats with at least 25kg weight\n15 reps 3 sets of chest press with at least 25kg weight\n15 reps 3 sets of deadlifts with at least 25kg weight\n15 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (25 <= bmi <= 29.9):
            workoutPlan["lightWorkout"] = "Run 5km\nCycle 8km"
            workoutPlan["moderateWorkout"] = "3-5 minutes 3 sets planking\n10 reps 3 sets 90-degree pushups\n15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "20 reps 3 sets of squats with at least 25kg weight\n20 reps 3 sets of chest press with at least 25kg weight\n20 reps 3 sets of deadlifts with at least 25kg weight\n20 reps 3 sets of dumbbell curls with at least 15pounds"
        elif (26 <= int(userAge) <= 40) and (bmi >= 30):
            workoutPlan["lightWorkout"] = "Run 6km\nCycle 9km"
            workoutPlan["moderateWorkout"] = "3-5 minutes 3 sets planking\n10 reps 3 sets 90-degree pushups\n15 reps 3 sets sit-ups"
            workoutPlan["intenseWorkout"] = "25 reps 3 sets of squats with at least 25kg weight\n25 reps 3 sets of chest press with at least 25kg weight\n25 reps 3 sets of deadlifts with at least 25kg weight\n25 reps 3 sets of dumbbell curls with at least 15pounds"

        return workoutPlan
        
    elif request.method == 'GET':
        return workoutPlan

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike