import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import './App.css';
import AboutUs from './pages/AboutUs';
import Header from './pages/Header';
import Membership from './pages/Membership';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='' element={<Membership />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;