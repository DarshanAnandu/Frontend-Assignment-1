import React from "react";
import '../../App.css';
import Dashboard from "../../asserts/dashboard.svg";
import Internship from "../../asserts/internship.svg";
import Skill from "../../asserts/skill.svg";

const Navbar = ({selectedTab, onTabChange}) => {
    const navItems = [
        { idx: 0, name: "Dashboard", img: Dashboard },
        { idx: 1, name: "Skill Test", img: Skill },
        { idx: 2, name: "Internships", img: Internship },
    ];

    return (
        <div className="Navbar-container">
            {navItems.map((items) => (
                <div key={items.idx} className={`NavItem-container ${items.idx === selectedTab ? "selected" : ""
                    }`}
                    onClick={() => onTabChange(items.idx, items.name)}
                >
                    <img src={items.img} alt={items.name} className="navbarImage" />
                    <p className="nav-name">{items.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Navbar;