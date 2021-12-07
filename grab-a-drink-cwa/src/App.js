import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import './App.css';
import AboutUs from './pages/AboutUs';
import Header from './pages/Header';
import Membership from './pages/Membership';
import Footer from './pages/Footer';
import TermsOfUse from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='' element={<Membership />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;