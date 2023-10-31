import React from "react";
import Header from "./components/Header/Header.jsx";
import ShowCase from "./components/MainPage/ShowCase.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import { useState } from "react";

const App = () => {
  const [isShowCaseOpen, setShowCaseOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedTabName, setSelectedTabName] = useState("");

  const handleTabChange = (tabIndex, tabName) => {
    setSelectedTab(tabIndex);
    setSelectedTabName(tabName);
  };
  const handleTab = () => {
    setSelectedTab(0);
    setSelectedTabName("Dashboard");
  };
  const openShowCase = () => {
    setShowCaseOpen(true);
  };

  const closeShowCase = () => {
    setShowCaseOpen(false);
  };
  return (
    <div className="app">
      <Header openShowCase={openShowCase} handleTab={handleTab} />
      <div className="whole-container">
        <Navbar selectedTab={selectedTab} onTabChange={handleTabChange} />
        {selectedTab === 1 ? (<MainPage />):(
          <div className="others">
            <p>Welcome to {selectedTabName}</p>
          </div>
        )}
        
        <ShowCase onClose={closeShowCase} isOpen={isShowCaseOpen} />
      </div>

    </div>
  );
};

export default App;
