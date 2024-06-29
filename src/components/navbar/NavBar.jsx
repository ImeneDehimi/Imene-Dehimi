import { NavLink } from 'react-router-dom';
import './NavBar.css';
import resume from './../../assets/Imene-Dehimi-CV.pdf'

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to={"/"}><li>About</li></NavLink>
                
                <NavLink to={"/work"}><li>Work</li></NavLink>
                <NavLink to={"/contact"}><li>Contact</li></NavLink>
            <a href={resume} download={'Resume'}><li>Resume</li></a>
            </ul>
        </div>
    );
};

export default NavBar;