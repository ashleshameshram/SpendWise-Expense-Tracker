import React from "react";

export default function SavingCompletedGoals({ savings, completedGoals }) {
  const completedGoalsWithDate = completedGoals.map((goal) => {
    const goalSavings = savings
      .filter((saving) => saving.goalId === goal.id)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    let cumulativeSavings = 0;
    let completedDate = null;

    for (const saving of goalSavings) {
      cumulativeSavings += Number(saving.amount);

      if (cumulativeSavings >= Number(goal.targetAmount)) {
        completedDate = saving.date;
        break;
      }
    }

    return {
      ...goal,
      completedDate,
    };
  });

  const goalIcons = {
        "Emergency Fund": "bi bi-shield-check",
        "Vacation": "bi bi-airplane",
        "Technology": "bi bi-laptop-fill",
        "Vehicle": "bi bi-car-front",
        "Family Support": "bi bi-people",
        "Health & Medical": "bi bi-heart-pulse",
        "Shopping": "bi bi-bag",
        "Festivals & gift": "bi bi-gift",
        "Business/Side Hustle": "bi bi-briefcase",
        "Home": "bi bi-house-door",
        "Education": "bi bi-mortarboard",
        "Investment": "bi bi-graph-up-arrow",
        "Retirement": "bi bi-piggy-bank",
        "Wedding": "bi bi-heart",
        "Other": "bi bi-bookmark-fill"
    };

  return (
    <div className="container-fluid mt-4 ">
      <div className="bg-white border rounded-4 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="px-4 py-3 border-bottom">
          <div className="row align-items-center">

            <div className="col">
              <div className="d-flex align-items-center gap-3">
                <i
                  className="bi bi-trophy-fill fs-4"
                  style={{ color: "#4f46e5" }}
                ></i>

                <div>
                  <h5 className="fw-semibold mb-0">
                    Completed Goals
                  </h5>

                  <p className="text-secondary small mb-0">
                    Great job! You've achieved these goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Goals */}
        {completedGoalsWithDate.length === 0 ? (
          <div className="py-5 text-center">
            <i
              className="bi bi-trophy fs-1"
              style={{ color: "#d2d9f7" }}
            ></i>

            <h6 className="fw-semibold mt-3 mb-1">
              No completed goals yet
            </h6>

            <p className="text-secondary small mb-0">
              Keep saving! Your completed goals will appear here once you reach a target.
            </p>
          </div>
        ) : (
        completedGoalsWithDate.map((goal) => (
            <div key={goal.id} className="row align-items-center py-3 ps-4 border-bottom ">

              {/* Icon */}
              <div className="col-auto">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#d2d9f7",
                    color: "#4f46e5",
                  }}
                >
                  <i className={`${goalIcons[goal.goalType] || "bi bi-trophy-fill"} fs-3`}></i>
                </div>
              </div>

              {/* Goal Name */}
              <div className="col-md-4 col-lg-4">
                <div className="fw-semibold">
                  {goal.goalName}
                </div>

                <div className="text-secondary small text-truncate">
                  {goal.note}
                </div>
              </div>

              {/* Target */}
              <div className="col-6 col-md-2">
                <div className="text-secondary  mb-1">
                  Target Amount
                </div>

                <div className="fw-semibold">
                  ₹{Number(goal.targetAmount).toLocaleString("en-IN")}
                </div>
              </div>

              {/* Completed Date */}
              <div className="col-6 col-md-2">
                <div className="text-secondary  mb-1">
                  Completed On
                </div>

                <div className="fw-semibold ">
                  {goal.completedDate
                    ? new Date(goal.completedDate).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "—"}
                </div>
              </div>

              {/* Status */}
              <div className="col-md-3">
                <span
                  className="badge rounded-3 px-3 py-2"
                  style={{
                    backgroundColor: "#eaf7ed",
                    color: "#198754",
                    fontWeight: "600",
                  }}
                >
                  <i className="bi bi-check-lg me-1"></i>
                  Completed
                </span>

                <div
                  className="small fw-semibold mt-1"
                  style={{ color: "#198754" }}
                >
                  You saved ₹
                  {Number(goal.savedAmount).toLocaleString("en-IN")}
                </div>
              </div>
            </div>
        ))
      )}
      </div>
    </div>
  );
}

