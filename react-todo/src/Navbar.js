import './Navbar.css';
import Styled from './App.styles';

const Navbar = () => {
    return (
        <div className="header">
        <h1>Your To-Do List</h1>
        <div className="nav-buttons">
          <Styled.Link to="/">Home</Styled.Link>
          <Styled.Link to="/add-todo">Add Todo</Styled.Link>
          <Styled.Link to="/edit-todo">Edit Todo</Styled.Link>
        </div>
      </div>
    );
}
 
export default Navbar;