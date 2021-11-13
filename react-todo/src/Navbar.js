import { Link } from 'react-router-dom';
import './Navbar.css'

const style = {
    textDecoration: "none",
    color: "white"
}

const h2 = {
    width: "38%",
    textAlign: "center",
    font: "bold 24px 'Oswald', sans-serif",
    textDecoration: "none",
    color: "white"
}

const Navbar = () => {
    return (  
        <div className="navbar">
            <Link to='/' style={h2}>Tou-Dou App</Link>
            <div className="navbar-buttons">
                <Link to='/' style={style}>Home</Link>
                <Link to='/add-todo' style={style}>Add Todo</Link>
                <Link to='/edit-todo' style={style}>Edit Todo</Link>
            </div>
        </div>
    );
}
 
export default Navbar;