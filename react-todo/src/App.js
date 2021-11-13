import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from "./AddTodo";
import Navbar from './Navbar';
import ViewTodo from './ViewTodos';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewTodo />} />
        <Route path="/add-todo" element={<AddTodo />} />
      </Routes>
    </Router>
  );
}
 
export default App;