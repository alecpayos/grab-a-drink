import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Content />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;
