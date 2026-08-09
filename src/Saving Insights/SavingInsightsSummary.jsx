import React from "react";

export default function SavingInsightsSummary({averageMonthlySavings,savings,thisMonthSavings,lastMonthSaving
  ,growth,growthPrefix}) {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-3">

        {/* This Month Saved */}
        <div className="col-4">
          <div className="bg-white border rounded-4 shadow-sm p-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "66px",
                  height: "66px",
                  backgroundColor: "#eef8e9",
                  color: "#20a05a",
                }}
              >
                <i className="bi bi-graph-up-arrow fs-3"></i>
              </div>

              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-secondary fw-semibold">
                    This Month Saved
                  </span>

                  <i
                    className="bi bi-info-circle text-secondary"
                    style={{ fontSize: "14px" }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-1">
                  ₹{Number(thisMonthSavings).toLocaleString("en-IN")}
                </h3>

                <div className="small">
                  {lastMonthSaving > 0 && (
                    <p className={`small mb-0 ${growth >= 0 ? "text-success" : "text-danger"}`}>
                      {growthPrefix}{growth}% vs last month
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Last Month Saved */}
        <div className="col-4">
          <div className="bg-white border rounded-4 shadow-sm p-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "66px",
                  height: "66px",
                  backgroundColor: "#eef2ff",
                  color: "#4f46e5",
                }}
              >
                <i className="bi bi-calendar3 fs-3"></i>
              </div>

              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-secondary fw-semibold">
                    Last Month Saved
                  </span>

                  <i
                    className="bi bi-info-circle text-secondary"
                    style={{ fontSize: "14px" }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-0">
                  ₹{Number(lastMonthSaving).toLocaleString("en-IN")}
                </h3>
              </div>

            </div>

          </div>
        </div>


        {/* Average Monthly Saving */}
        <div className="col-4">
          <div className="bg-white border rounded-4 shadow-sm p-3">

            <div className="d-flex align-items-center gap-3">

              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "66px",
                  height: "66px",
                  backgroundColor: "#f1edff",
                  color: "#6f42c1",
                }}
              >
                <i className="bi bi-bar-chart-fill fs-3"></i>
              </div>

              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-secondary fw-semibold">
                    Avg. Monthly Saving
                  </span>

                  <i className="bi bi-info-circle text-secondary"
                    style={{ fontSize: "14px" }}></i>
                </div>

                <h3 className="fw-bold mb-0">
                  {averageMonthlySavings !== null
                    ? `₹${Number(averageMonthlySavings).toLocaleString("en-IN",{
                      maximumFractionDigits:0 })}`
                    : "—"
                  }
                </h3>
                <p className="text-secondary small mb-0">
                  {averageMonthlySavings === null 
                  ? "Need more History" : "Based on your saving History"}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}