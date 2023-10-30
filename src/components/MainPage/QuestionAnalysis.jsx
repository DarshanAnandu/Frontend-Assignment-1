import PieChart from './PieChart.jsx';

const QuestionAnalysis = ({ value, limit }) => {
    const Datas = () => {
        return (
            <span>
                <b>{`You scored ${value} question correct out of ${limit}. `}</b>
                {value !== limit
                    ? `However it still needs some improvements` : ""}
            </span>
        );
    };
    return (
        <div className="QuestionAnalysis-container">
            <div className="header">
                <h3 className="title">Question Analysis</h3>
                <span className="value">{`${value}/${limit}`}</span>
            </div>

            <p className="description">{<Datas />}</p>
            <PieChart value={value} limit={limit} />
        </div>
    );
};

export default QuestionAnalysis