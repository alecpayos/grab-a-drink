import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./Templates";
import './styles.css';
import MainHelmet from "./MainHelmet";

const App = () => {
    const mainUrls = ['/header', '/intro-cards', '/footer'];

    return (
        <Router>
            <MainHelmet />
            <Template url={mainUrls[0]} />
            <Routes>
                <Route path='/' element={<Template url={mainUrls[1]} />} />
            </Routes>
            <Template url={mainUrls[2]} />
        </Router>
    );
}
 
export default App;

// SpeccUp offers a variety of workout plans that are best fitted to your body. Workout plans may vary in intensity and we suggest 3 categories: Light, Moderate, and Intense. Your information will be essential in generating the perfect workout plan.
// Famous artists chose our app in picking out the best exercises for their workout needs. We deliver results like no other through effectiveness and accuracy. Join our routine by signing up as we give out early-bird discounts!