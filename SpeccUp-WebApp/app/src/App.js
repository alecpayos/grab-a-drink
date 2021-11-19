import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./Templates";
import './styles.css';
import MainHelmet from "./MainHelmet";

const App = () => {
    const mainUrls = ['/header', '/content', '/footer'];

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