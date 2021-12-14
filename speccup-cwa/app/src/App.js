import './styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header, { Mask } from './pages/Header'
import Content from './pages/Content'
import Footer from './pages/Footer'
import Greetings from "./pages/Greetings";
import Disclaimer from './pages/Disclaimer';

const App = () => {
    return (
        <Router>
            <Header />
            <Mask />
            <Routes>
                <Route exact path='/' element={<Greetings />}/>
                <Route path='/speccup-demo' element={<Content />}/>
                <Route path='/disclaimer' element={<Disclaimer />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;
