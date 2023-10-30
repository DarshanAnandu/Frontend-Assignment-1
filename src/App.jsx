import React from "react";
import Header from "./components/Header/Header.jsx";
import ShowCase from "./components/MainPage/ShowCase.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import { useState } from "react";

const App = () => {
  const [isShowCaseOpen, setShowCaseOpen] = useState(false);
  const openShowCase = () => {
    console.log("Stamp")
    setShowCaseOpen(true);
  };

  const closeShowCase = () => {
    setShowCaseOpen(false);
  };
  return (
    <div className="app">
      <Header openShowCase={openShowCase} />
      <div className="whole-container">
        <Navbar />
        <MainPage />
        <ShowCase onClose={closeShowCase} isOpen={isShowCaseOpen} />
      </div>

    </div>
  );
};

export default App;
