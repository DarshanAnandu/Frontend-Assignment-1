import '../../App.css';
import LineGraph from './LineGraph';

const ComparisonGraph = ({ score, percentile }) => {
    return (
        <div className="comparison-container">
            <div className="comparison-head">
                <div className="head-content">
                    <h3 className="head-title">Comparison Graph</h3>
                    <p className="head-description">
                        <b>{`You scored ${percentile}% percentile `}</b>
                        {`which is lower than the average percentile 72% of all the engineers who took this assessment`}
                    </p>
                </div>
                <div className="stat-emog">
                    <span className='emog'>📈</span>
                </div>
            </div>
            <LineGraph score={score} percentile={percentile} />
        </div>
    );
};

export default ComparisonGraph;