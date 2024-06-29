import './App.css';
import Main from './components/Main/Main';
import SideNav from './components/sidenav/SideNav';

const App = () => {
  return (
    <div className='container'>
      <SideNav></SideNav>
      <Main></Main>
    </div>
  );
};

export default App;