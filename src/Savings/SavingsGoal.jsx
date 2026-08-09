import React from 'react'
import './SavingsGoals.css'
import { useNavigate } from "react-router-dom";

export default function SavingsGoal({goals,savings,deleteGoal}) {
    const navigate = useNavigate();
    const goalIcons = {
        "Emergency Fund": "bi bi-shield-check",
        "Vacation": "bi bi-airplane",
        "Technology": "bi bi-laptop",
        "Vehicle": "bi bi-car-front",
        "Family Support": "bi bi-people",
        "Health and Medical": "bi bi-heart-pulse",
        "Shopping": "bi bi-bag",
        "Festivals & gift": "bi bi-gift",
        "Business": "bi bi-briefcase",
        "Home": "bi bi-house-door",
        "Education": "bi bi-mortarboard",
        "Investment": "bi bi-graph-up-arrow",
        "Retirement": "bi bi-piggy-bank",
        "Wedding": "bi bi-heart",
        "Other": "bi bi-cash-coin"
    };
    const goalColors = {
        "Vacation": "#d6edfe",
        "Emergency Fund": "#fccce0",
        "Technology": "#eabcfc",
        "Vehicle": "#f7cbff",
        "Family Support" : "#d5fec2",
        "Health and Medical": "#f3bcfd",
        "Shopping" : "#cff6cd",
        "Festivals & gift" : "#fbdac6",
        "Business" : "#fec8bc",
        "Home": "#ffdae6",
        "Education": "#f9d9cd",
        "Investment": "#d3f5f9",
        "Retirement" : "#fbb5e5",
        "Wedding": "#ffc7c7",
        "Other": "#f8feb9"
    };
    const getProgressColor = (progress) => {
        if(progress <= 30) return "#e93b20";
        if(progress <= 60) return "#F59E0B"; 
        if(progress <= 90) return "#3B82F6";
        return "#22C55E"; 
    };

    return (
        <div className="shadow-lg rounded-4 p-4 bg-white">
            <div className='d-flex justify-content-between mb-3'>
                {/* header */}
                <h4 className="fw-bold mb-0">
                    Active Savings Goals
                </h4>
                <small className="text-muted fw-semibold">
                    {goals.length} Goals
                </small>
            </div>

            <div className='goals-list'>
                {goals.length === 0 ? (
                    <p className="text-center py-4 fs-5 fw-semibold" style={{color:"#001463"}}>
                        <i className="bi bi-bullseye me-2"></i>
                         All your savings goals are completed!
                        <p className="text-secondary mb-3">
                            Amazing work! View your completed goals in Savings Insights.
                        </p>
                        <button className="btn btn-primary rounded-3"
                        onClick={() => navigate("/savings-insights-page")}>
                            View Completed Goals
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </p>
                    ) : (
                    goals.map((goal,index) => {
                            const currentAmount = savings
                                .filter((saving) => saving.goalId === goal.id)
                                .reduce((total,saving) => total + Number(saving.amount), 0);

                            const progress = Number(goal.targetAmount) > 0 
                            ?  (currentAmount / Number(goal.targetAmount)) * 100 : 0 ;
                                
                            const remaining = Math.max(
                                Number(goal.targetAmount) - currentAmount , 0
                            );
                            const progressColor = getProgressColor(progress);
                            const isGoalCompleted = currentAmount >= Number(goal.targetAmount);

                            const icon = goalIcons[goal.goalType] || goalIcons["Other"];
                            const bgColor = goalColors[goal.goalType] || goalColors["Other"];

                        return(       
                            <div key={goal.id} 
                            className={`py-3 ${index !== goals.length - 1 ? "border-bottom" : ""}`}>
                            <div className="d-flex align-items-center">
                                {/* Goal Icon */}
                                <div className="rounded-circle d-flex justify-content-center align-items-center"
                                    style={{width: "48px",height: "48px",
                                        minWidth: "48px",backgroundColor: bgColor}}>
                                    <i className={icon} style={{ fontSize: "23px" }}></i>
                                </div>

                                {/* Goal Details */}
                                <div className="ms-3 flex-grow-1">
                                    {/* Top Row */}
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div className="me-3">
                                            <h6 className="fw-semibold mb-1">
                                                {goal.goalName}
                                            </h6>
                                            <small className="text-primary fw-semibold"
                                            style={{ fontSize: "13px" }}>
                                                Target:₹{Number(goal.targetAmount).toLocaleString("en-IN")}
                                            </small>
                                        </div>

                                        <div className="text-end">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <span className="fw-bold"
                                                    style={{fontSize: "17px",color: "#198754"}}>
                                                    ₹{currentAmount.toLocaleString("en-IN")}
                                                </span>
                                                <small className="text-muted fst-italic ms-1"
                                                style={{ fontSize: "12px" }}>
                                                    saved
                                                </small>
                                                <button className="btn btn-sm p-0 ms-2"
                                                onClick={() =>deleteGoal(goal.id)}>
                                                <i className="bi bi-trash3 text-danger"
                                                style={{ fontSize: "15px" }}>
                                                </i>
                                                </button>
                                            </div>

                                            <small style={{color: isGoalCompleted ? "#198754" : "#05743d",
                                            fontWeight: "500",fontSize: "12px"}}>
                                                {isGoalCompleted ? (
                                                    <>
                                                        <i className="bi bi-check-circle-fill me-1"></i>
                                                        Goal Completed
                                                    </>
                                                ) : (
                                                    <>
                                                        ₹
                                                        {remaining.toLocaleString(
                                                            "en-IN"
                                                        )}{" "}
                                                        left
                                                    </>
                                                )}
                                            </small>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="mt-3">
                                        <div className="progress rounded-pill" style={{ height: "8px" }}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                style={{width: `${Math.min(progress, 100)}%`,
                                                    backgroundColor:
                                                        isGoalCompleted
                                                            ? "#198754"
                                                            : progressColor,
                                                    transition:
                                                        "all .4s ease",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        );
                    })
                )} 
            </div>    
        </div>
    );
}