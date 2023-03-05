import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2 className="title">Plant Disease Detector</h2>
            
            <ul className="navItems">
                <Link to="/trivia">Trivia</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}

export default NavBar;