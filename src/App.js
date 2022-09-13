import logo from './logo.svg';
import './App.css';
import SideBar from './components/screens/SideBar/SideBar';
import MainDash from './components/screens/MainDash/MainDash';

function App() {
  return (
    <>
        <div className='container'>
            <SideBar />
            <MainDash />
        </div>
          
    </>
  );
}

export default App;
