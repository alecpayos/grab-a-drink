import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './pages/Header';
import Membership from './pages/Membership';
import Shop, { ProductHighlight } from './pages/Shop'
import Footer from './pages/Footer';
import TermsOfUse from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/terms' element={<TermsOfUse />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;