import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            
            <div className="logoSection">
                <img className='logo' src={logo}/>
                <h2 className="title"> <span>Leaf Buster</span> AI</h2>
            </div>

            
            <ul className="navItems">
                <Link to="/home">Home</Link>
                <Link to="/trivia">Trivia</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}

export default NavBar;