import logo from './logo.svg';
import './App.css';
import SideBar from './components/screens/SideBar/SideBar';
import MainDash from './components/screens/MainDash/MainDash';
import Graph from './components/screens/Graph/Graph';

function App() {
  return (
    <>
        <div className='container'>
            <SideBar />
            <MainDash />
            <Graph />
        </div>
          
    </>
  );
}

export default App;
