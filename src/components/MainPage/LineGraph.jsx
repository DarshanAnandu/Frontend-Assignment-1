
import React from "react";
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot,
    ReferenceLine,
    CartesianGrid
} from "recharts";
import '../../App.css';

const LineGraph = ({ score, percentile }) => {
    const data = [
        { score: 15, percentile: 100 },
        { score: 14, percentile: 93 },
        { score: 13, percentile: 87 },
        { score: 12, percentile: 80 },
        { score: 11, percentile: 73 },
        { score: 10, percentile: 67 },
        { score: 1, percentile: 7 },
        { score: 6, percentile: 40 },
        { score: score, percentile: percentile },
    ];


    const avg = 80;
    const xTicks = Array.from({ length: 6 }, (_, i) => i * 20);
    const sortedData = data.sort((a, b) => a.percentile - b.percentile);
    const formatXAxis = (tick) => {
        return `${tick}%`;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length && label === percentile) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}% Percentile`}</p>
                    <p className="desc">Your Score</p>
                </div>
            );
        }
        return null;
    };
    return (
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart
                width={500}
                height={300}
                data={sortedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeOpacity={0.3} strokeDasharray="3 3" />
                <XAxis
                    dataKey={"percentile"}
                    type="number"
                    domain={[0, 100]}
                    tickLine={false}
                    tickFormatter={formatXAxis}
                    ticks={xTicks}
                />
                <YAxis dataKey={"score"} hide />
                <Tooltip content={<CustomTooltip />} />
                <Line
                    type={"monotone"}
                    dataKey={"score"}
                    stroke="#438AF6"
                    activeDot={{ r: 8 }}
                />
                <ReferenceDot
                    x={avg}
                    y={20}
                    r={8}
                    fill="orange"
                    stroke="none"
                />
                <ReferenceDot
                    x={percentile}
                    y={score}
                    r={8}
                    fill="#438AF6"
                    stroke="none"
                />
                <ReferenceLine
                    x={avg}
                    stroke="orange"
                    strokeDasharray="5 5"
                />
                <ReferenceLine x={percentile} stroke="#438AF6" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineGraph;