import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Content from "./pages/Content";
// import PromoDeals from "./pages/PromoDeals";
import Registration from "./pages/Registration";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path='/' element={<Content />} />
                <Route path='/promo-deals' element={<PromoDeals />} /> */}
                <Route path='/' element={<Registration />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;
