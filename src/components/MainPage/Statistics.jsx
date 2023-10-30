import '../../App.css';
import Cup from '../../asserts/trophy.png';
import Note from '../../asserts/notepad.png';
import Tick from '../../asserts/greentick.png';



const Statistics = ({ rank, percentile, currentScore, maxScore }) => {

    const Stat = ({ image, value, title }) => {
        return (
            <div className="stat-container">
                <div className="stat-img">
                    <img src={image} className="image" alt="abc" />
                </div>
                <div className="stat-info">
                    <p className="info-value">{value}</p>
                    <p className="info-title">{title}</p>
                </div>
            </div>
        );
    };
    return (
        <div className="Statistics-container">
            <h3 className="stat-header">Quick Statistics</h3>
            <div className="stat-wrap">
                <Stat value={rank.toLocaleString()} title={"Your Rank"} image={Cup} />
                <Stat value={`${percentile}`} title={"Percentile"} image={Note} />
                <Stat value={`${currentScore}/${maxScore}`} title={"Correct Answers"} image={Tick} />
            </div>
        </div>
    );
};

export default Statistics;