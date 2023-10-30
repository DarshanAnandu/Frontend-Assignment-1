import { useEffect, useState } from "react";
// import '../../App.css';

const SyllabusItem = ({ name, progress, color }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const validProgress = Math.min(100, Math.max(0, progress));
        setWidth(validProgress);
    }, [progress]);
    const progressBarStyle = {
        width: `${width}%`,
        backgroundColor: color,
        opacity: 1,
        zIndex: 9
    };
    return (
        <div className="Syllabus-Item">
            <label className="item">{name}</label>
            <div className="progress">
                <div className="progressbar">
                    <div className="progressbar-style" style={progressBarStyle}></div>
                </div>
                <span style={{ color: color, }}>{`${progress}%`}</span>
            </div>
        </div>
    );
};
const Syllabus = () => {
    return (
        <div className="Syllabus-container">
            <h3 className="syllabus-title">Syllabus wise Analysis</h3>
            <div className="graph">
                <SyllabusItem
                    name={"HTML Tools, Forms, History"}
                    progress={80}
                    color={"#438AF6"}
                />
                <SyllabusItem
                    name={"Tags & References in HTML"}
                    progress={60}
                    color={"#ff9142"}
                />
                <SyllabusItem
                    name={"Tables & CSS Basics"}
                    progress={24}
                    color={"#FB5E5E"}
                />
                <SyllabusItem
                    name={"Tables & CSS Basics"}
                    progress={96}
                    color={"#2EC971"}
                />
            </div>
        </div>
    );
};

export default Syllabus;