import React from "react";
import Cuvette from "../../asserts/cuvette.svg";
import Profile from "../../asserts/logo.png";

const Header = ({ openShowCase }) => {

    return (
        <div className="Header-container">
            <img src={Cuvette} alt="Cuvette" className="cuvette" />
            <div className="Profile-container">
                <img src={Profile} alt="user" className="profile" onClick={openShowCase} />
                <h3 className="username" onClick={openShowCase}>Darshan Anandu</h3>
            </div>

        </div>
    );
};

export default Header;

