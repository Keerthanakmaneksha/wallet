import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Transaction from './components/screens/Transaction/Transaction';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './components/screens/SideBar/SideBar';
import  Dash from "./components/screens/Dash/Dash"
import Right from './components/screens/Right/Right';
import Cards from './components/screens/Cards/Cards';
import Savings from './components/screens/Savings/Savings';
import Statistics from './components/screens/Statistics/Statistics';
import Analytics from './components/screens/Analytics/Analytics';

function App() {
  return (
    <>
        <Router>
            <Routes>
                <SideBar />
                <Dash />
                <Right />
                <Route path="/" element={<Dash />} />
                <Route path="/Cards" element={<Cards />} />
                <Route path="/Savings" element={<Savings />} />
                <Route path="/Statistics" element={<Statistics/>} />
                <Route path="Analytics" element={<Analytics/>} />
                <Route path="/Transaction" element={<Transaction/>} />
            </Routes>
        </Router>
    </>
  );
}

const Main = styled.div``;

export default App;
