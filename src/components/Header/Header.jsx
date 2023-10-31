import React from "react";
import Cuvette from "../../asserts/cuvette.svg";
import Profile from "../../asserts/logo.png";

const Header = ({ openShowCase, handleTab }) => {

    return (
        <div className="Header-container">
            <img src={Cuvette} alt="Cuvette" className="cuvette" onClick={handleTab} />
            <div className="Profile-container" onClick={openShowCase}>
                <img src={Profile} alt="user" className="profile" />
                <h3 className="username">Darshan Anandu</h3>
            </div>

        </div>
    );
};

export default Header;

