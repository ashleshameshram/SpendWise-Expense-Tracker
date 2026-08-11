import React from "react";
import './SavingInsightsDashboard.css'

export default function SavingInsightsDashboard({growthPrefix,growth,goals,nextGoal,
    totalSaved,completedGoals,activeGoals}) {
  return (
    <div className="container-fluid mt-2 saving-insights-dashboard">
      <div className="row g-3"> 

        {/* Total Saved */}
        <div className="col-3">
          <div className="border rounded-4 p-3 shadow-sm h-100" style={{backgroundColor:"#cfffe5"}}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{width: "54px",height: "54px",backgroundColor: "#f0efff",color: "#4f46e5"}}>
              <i className="bi bi-wallet2 fs-4"></i>
            </div>

            <div className="d-flex align-items-center gap-2 text-secondary mb-2">
              <span>Total Saved</span>
              <i className="bi bi-info-circle"></i>
            </div>

            <h3 className="fw-semibold mb-2">₹{Number(totalSaved).toLocaleString("en-IN")}</h3>
            {growth !== null && (
                <p className="mb-0 text-secondary small">
                    <span
                        className={growth > 0 ? "text-success fw-semibold" : "text-danger fw-semibold"}>
                        {growthPrefix}{growth}%
                    </span>{" "}
                    vs last month
                </p>
            )}
          </div>
        </div>


        {/* Active Goals */}
        <div className="col-3">
          <div className="border rounded-4 p-3 shadow-sm h-100" style={{backgroundColor:"#cce9fb"}}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{width: "54px",height: "54px",backgroundColor: "#f0efff",color: "#4f46e5"}}>
              <i className="bi bi-bullseye fs-4"></i>
            </div>

            <div className="text-secondary mb-2">
              Active Goals
            </div>

            <h3 className="fw-bold mb-2">{activeGoals.length}</h3>

            <p className="mb-0 text-secondary small">
              of {goals.length} goals
            </p>
          </div>
        </div>


        {/* Completed Goals */}
        <div className="col-3">
          <div className="border rounded-4 p-3 shadow-sm h-100" style={{backgroundColor:"#ccd0fb"}}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{width: "54px",height: "54px",backgroundColor: "#f0efff",color: "#4f46e5"}}>
              <i className="bi bi-trophy fs-4"></i>
            </div>

            <div className="text-secondary mb-2">
              Completed Goals
            </div>

            <h3 className="fw-bold mb-2">{completedGoals.length}</h3>
          </div>
        </div>


       {/* Next Goal */}
      <div className="col-3">
        <div className="border rounded-4 p-3 shadow-sm h-100" style={{backgroundColor:"#f6ccfb"}}>
          <div className="rounded-circle d-flex align-items-center justify-content-center mb-3"
          style={{width: "54px",height: "54px",backgroundColor: "#f0efff",color: "#4f46e5"}}>
            <i className="bi bi-rocket-takeoff fs-4"></i>
          </div>

          <div className="text-secondary mb-2">
            Next Goal
          </div>

          <h6 className="fw-semibold mb-1">
              {nextGoal?.goalName || "No active goal"}
          </h6>

          <h3 className="fw-bold mb-2">
              ₹
              {nextGoal
                  ? Number(nextGoal.targetAmount).toLocaleString("en-IN")
                  : "0"}
          </h3>

          <p className="text-secondary small mb-0">
              {nextGoal
                  ? `₹${nextGoal.remaining.toLocaleString("en-IN")} remaining`
                  : "Create a new goal to get started"}
          </p>
          
        </div>
      </div>
      </div>
    </div>
  );
}