import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages//Header";
import Content from "./pages/Content";
import Footer from "./pages//Footer";
import PromoDeals from "./pages/PromoDeals";
import Registration from "./pages/Registration";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/exclusives' element={<PromoDeals />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;
