import { IoPhonePortraitOutline } from 'react-icons/io5';
import './SideNav.css';
import { CiMail } from "react-icons/ci";


const SideNav = () => {
    return (
        <div className='sidenav'>
            <div className='sidenav-top'>
            <img src="" alt="" />
            <h3> Hi! I'm Imene Dehimi</h3>
            <h2>Fullstack Developer</h2>
            <span className='sidenav-line'></span>
            </div>
            <div className='info'>
                <div className="info-icon">
                <CiMail />
                </div>
                <div>
                <p className='info-title'>Email</p>
                <p>imenedehimi8@gmail.com</p>
                </div>
            </div>
            <div className='info'>
                <div className="info-icon">
                <IoPhonePortraitOutline />
                </div>
                <div>
                <p className='info-title'>Phone</p>
                <p>0675365156</p>
                </div>
            </div>
            <div className="socials">

            </div>
        </div>
    );
};

export default SideNav;