import About from '../About/About';
import NavBar from '../navbar/NavBar';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <NavBar></NavBar>
            <About></About>
        </div>
    );
};

export default Main;