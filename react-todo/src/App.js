import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit-todo" element={<EditTodo />} />
      </Routes>
    </Router>    
  );
}
 
export default App;