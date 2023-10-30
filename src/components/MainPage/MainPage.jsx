import React, { useState } from "react";
import HtmlComponent from "./HtmlComponent";
import Statistics from "./Statistics";
import ComparisonGraph from "./ComparisonGraph";
import Syllabus from "./Syllabus";
import QuestionAnalysis from "./QuestionAnalysis";
import Modal from "./Modal";

const MainPage = () => {
    const [isModelOpen, setModelOpen] = useState(false);
    const [rank, setRank] = useState(12890);
    const [percentile, setPercentile] = useState(37);
    const [currentScore, setCurrentScore] = useState(7);
    const maxScore = 15;

    const openModal = () => {
        setModelOpen(true);
    };

    const closeModal = () => {
        setModelOpen(false);
    };

    return (
        <div className="MainPage-container">
            <h2 className="header-skill">Skill Test</h2>
            <div className="ParentSkill-container">
                <div className="center-container">
                    <HtmlComponent openModel={openModal} />
                    <Statistics rank={rank} percentile={percentile} currentScore={currentScore} maxScore={maxScore} />
                    <ComparisonGraph percentile={percentile} score={currentScore} />
                </div>
                <div className="right-container">
                    <Syllabus />
                    <QuestionAnalysis value={currentScore} limit={maxScore} />
                </div>
                <Modal
                    isOpen={isModelOpen}
                    onClose={closeModal}
                    rank={rank}
                    percentile={percentile}
                    currentScore={currentScore}
                    setRank={setRank}
                    setPercentile={setPercentile}
                    setCurrentScore={setCurrentScore}
                />
            </div>
        </div>
    );
};

export default MainPage;