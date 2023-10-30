import React from "react";
import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer
} from "recharts";

const PieChart = ({ value, limit }) => {
    const data = [{ name: "L1", value: value }];
    return (
        <div className="piechart-container">
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                    innerRadius={60}
                    outerRadius={90}
                    barSize={15}
                    data={data}
                    startAngle={90}
                    endAngle={-270}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, limit]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background
                        clockWise
                        dataKey="value"
                        fill="#438AF6"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <span className="target">🎯</span>
        </div>
    );
};

export default PieChart;

