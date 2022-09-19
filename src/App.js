import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/screens/Transaction/Transaction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/screens/SideBar/SideBar";
import Dash from "./components/screens/Dash/Dash";
import Right from "./components/screens/Right/Right";
import styled from "styled-components";
import Settings from "./assets/images/Settings/Settings";
import CardNOtDefined from "./components/screens/NotDefined/CardNotDefined";
import SavingsNotDefined from "./components/screens/NotDefined/SavingsNotDefined";
import StatisticsNotDefined from "./components/screens/NotDefined/StatisticsNotDefined";
import AnalyticsNotDefined from "./components/screens/NotDefined/AnalyticsNotDefined";
import TransactionNotDefined from "./components/screens/NotDefined/TransactionNotDefined";
import Settingsnot from "./components/screens/NotDefined/Settingsnot";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <SideBar />
                <Dash />
                <Right />
              </Main>
            }
          />
          <Route path="/cardsnot" element={<CardNOtDefined />} />
          <Route path="/savingsnot" element={<SavingsNotDefined />} />
          <Route path="/statisticsnot" element={<StatisticsNotDefined />} />
          <Route path="/analyticsnot" element={<AnalyticsNotDefined />} />
          <Route path="/transactionnot" element={<TransactionNotDefined />} />
          <Route path="/settingsnot" element={<Settingsnot />} />
        </Routes>
      </Router>
    </div>
  );
}

const Main = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 220px auto 500px;
  @media all and (max-width: 768px) {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: 0.2fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "."
      "."
      ".";
  }
`;

export default App;
