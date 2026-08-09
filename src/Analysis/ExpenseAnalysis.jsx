import React from "react";
import {Pie,PieChart,Cell,Tooltip,Legend} from "recharts";
import MonthlySummary from "./MonthlySummary";

export default function ExpenseAnalysis({ transactions }) {
    const expenses = transactions.filter(
        (t) => t.type === "Expense"
    );

    const categoryTotals = {};

    const colors = [
        "#6d67e6",
        "#e058f1",
        "#f1d963",
        "#f6bb5c",
        "#8bfaf8",
        "#e259b2",
        "#5ce05c",
    ];

    expenses.forEach((t) => {
        if (categoryTotals[t.category]) {
            categoryTotals[t.category] =
                categoryTotals[t.category] + Number(t.amount);
        } else {
            categoryTotals[t.category] = Number(t.amount);
        }
    });

    const charData = Object.entries(categoryTotals).map(
        ([category, amount]) => ({
            name: category,
            value: amount,
        })
    );

    const totalExpense = expenses.reduce(
        (total, t) => total + Number(t.amount),
        0
    );

    return (
        <div>
            {/* Analysis Heading */}
            <div className="d-flex align-items-center gap-3 p-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{width: "50px",height: "50px",backgroundColor: "rgb(221, 217, 253)"}}>
                    <i className="fa-solid fa-chart-pie"
                    style={{color: "#4f46e5",fontSize: "22px"}}></i>
                </div>

                <div>
                    <h4 className="mb-1 fw-semibold">
                        Analysis
                    </h4>

                    <p className="text-muted fw-normal mb-0">
                        Understand your spending patterns with visual insights.
                    </p>
                </div>
            </div>

            {/* Main Card */}
            <div className="mx-3 mx-md-4 border rounded-4 p-3 p-md-4 mt-2 shadow-sm"
            style={{backgroundColor: "#ffffff"}}>
                <h4 className="mb-4 fw-semibold">
                    Expenses by Category
                </h4>

                <div className="row g-4 align-items-stretch">
                    {/* Pie Chart Column */}
                    <div className="col-12 col-xl-7">
                        <div className="h-100 rounded-4 d-flex align-items-center justify-content-center p-3"
                        style={{backgroundColor: "#f7f6ff"}}>
                            {charData.length > 0 ? (
                                <PieChart
                                    width={480}
                                    height={300}
                                    style={{
                                        backgroundColor: "#f7f6ff",
                                        borderRadius: "12px",
                                    }}>
                                    <Pie
                                        data={charData}
                                        dataKey="value"
                                        nameKey="name"

                                        cx={144}
                                        cy={150}
                                        innerRadius={70}
                                        outerRadius={120}

                                        cornerRadius={10}
                                        paddingAngle={3}>

                                        {charData.map(
                                            (entry, index) => (
                                                <Cell key={index}
                                                fill={colors[index % colors.length]}            
                                                />
                                            )
                                        )}
                                    </Pie>

                                    {/* Center Text */}
                                    <text
                                        x={144}
                                        y={143}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#6b7280"
                                        fontSize={14}
                                    >
                                        Total Expense
                                    </text>

                                    <text
                                        x={144}
                                        y={169}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#111827"
                                        fontSize={22}
                                        fontWeight="bold"
                                    >
                                        ₹
                                        {totalExpense.toLocaleString(
                                            "en-IN"
                                        )}
                                    </text>

                                    {/* Tooltip */}
                                    <Tooltip
                                        formatter={(value) =>
                                            `₹${Number(
                                                value
                                            ).toLocaleString("en-IN")}`
                                        }
                                    />

                                    {/* Legend */}
                                    <Legend
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                        iconType="circle"
                                        wrapperStyle={{
                                            lineHeight: "28px",
                                        }}
                                        formatter={(
                                            value,
                                            entry
                                        ) =>
                                            `${value} - ₹${Number(
                                                entry.payload.value
                                            ).toLocaleString(
                                                "en-IN"
                                            )}`
                                        }
                                    />
                                </PieChart>
                            ) : (
                                <div className="text-center py-5">
                                    <i className="bi bi-pie-chart fs-1"
                                    style={{color: "#c4b5fd"}}></i>

                                    <p className="text-secondary mt-3 mb-0">
                                        No expense data available yet.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Monthly Summary Column */}
                    <div className="col-12 col-xl-5">
                        <div className="h-100">
                            <MonthlySummary transactions={transactions}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

