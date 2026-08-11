import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import "./SavingInsightsAnalytics.css";

export default function SavingInsightsAnalytics({ goals, savings }) {
    const goalSavings = goals.map((goal) => {
        const amount = savings
            .filter((saving) => saving.goalId === goal.id)
            .reduce(
                (total, saving) => total + Number(saving.amount),
                0
            );

        return {
            name: goal.goalName,
            amount: amount,
        };
    });

    const chartData = goalSavings.filter(
        (goal) => goal.amount > 0
    );

    const totalSaved = chartData.reduce(
        (total, goal) => total + goal.amount,
        0
    );

    const goalColors = [
        "rgb(79, 70, 229)",
        "#ef5bac",
        "#8755b9",
        "#f2994a",
        "#7de080",
    ];

    return (
        <div className="container-fluid mt-4 savings-analytics-container">
            <div className="bg-white border rounded-4 shadow-sm overflow-hidden savings-analytics-card">

                {/* Header */}
                <div className="d-flex align-items-center gap-3 px-4 py-1 border-bottom savings-analytics-header">
                    <i
                        className="bi bi-pie-chart-fill fs-3"
                        style={{ color: "#4f46e5" }}
                    ></i>

                    <h4 className="fw-semibold mb-0">
                        Savings Analytics
                    </h4>
                </div>

                {/* Content */}
                <div className="savings-analytics-content">

                    <h5 className="fw-semibold ps-4 pt-2 savings-by-goal-title">
                        Savings by Goal
                    </h5>

                    <div className="row align-items-center savings-analytics-row">

                        {/* Donut Chart */}
                        <div className="col-6 savings-chart-column">
                            <div className="savings-chart-wrapper">

                                <div className="savings-chart">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <PieChart>
                                            <Pie
                                                data={chartData}
                                                dataKey="amount"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius="60%"
                                                outerRadius="82%"
                                                paddingAngle={2}
                                                stroke="none"
                                            >
                                                {chartData.map(
                                                    (entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={
                                                                goalColors[
                                                                    index %
                                                                    goalColors.length
                                                                ]
                                                            }
                                                        />
                                                    )
                                                )}
                                            </Pie>

                                            <Tooltip
                                                formatter={(value, name) => [
                                                    `₹${Number(
                                                        value
                                                    ).toLocaleString("en-IN")}`,
                                                    name
                                                ]}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>

                                    {/* Center Text */}
                                    <div className="savings-chart-center">
                                        <div className="text-secondary savings-chart-center-label">
                                            Total Saved
                                        </div>

                                        <div className="fw-bold savings-chart-center-amount">
                                            ₹{totalSaved.toLocaleString("en-IN")}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Goal Details */}
                        <div className="col-4 savings-goal-details-column">
                            <div className="d-flex flex-column gap-2 savings-goal-details">

                                {chartData.map(
                                    (goal, index) => {
                                        const percentage =
                                            totalSaved > 0
                                                ? (goal.amount / totalSaved) *
                                                  100
                                                : 0;

                                        return (
                                            <div
                                                key={goal.name}
                                                className="d-flex align-items-center justify-content-between savings-goal-item"
                                            >

                                                <div className="d-flex align-items-center gap-2 savings-goal-name">
                                                    <span
                                                        className="rounded-circle savings-goal-dot"
                                                        style={{
                                                            backgroundColor:
                                                                goalColors[
                                                                    index %
                                                                    goalColors.length
                                                                ]
                                                        }}
                                                    ></span>

                                                    <span className="fw-semibold">
                                                        {goal.name}
                                                    </span>
                                                </div>

                                                <div className="text-end savings-goal-value">
                                                    <div className="fw-semibold">
                                                        ₹
                                                        {goal.amount.toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </div>

                                                    <div className="small text-secondary">
                                                        {percentage.toFixed(1)}%
                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    }
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}