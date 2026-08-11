import React from "react";
import './Dashboard.css'

export default function Dashboard({ savings,income, expense, balance }) {
  const totalSaved = savings.reduce
  ((total,saving) => total + Number(saving.amount),0);

  return (
    <div className="row g-4 mb-5 mx-4 dashboard-row">

      {/* Current Balance */}
      <div className="col-6 col-md-6 col-lg-3">
        <div className="rounded-4 p-4 h-100 d-flex justify-content-between align-items-center dashboard-card"
          style={{background: "#d2f6db",boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
          <div className="flex-grow-1">
            <h6 className="fw-normal mb-2" style={{ color: "green" }}>
              CURRENT BALANCE
            </h6>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-indian-rupee-sign me-2 card-amount-icon" style={{ fontSize: "26px" }}></i>
              <h4 className="fw-bold mb-0">
                {balance.toLocaleString("en-IN")}
              </h4>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center rounded-circle ms-3 card-icon-circle"
          style={{width: "65px",height: "65px",minWidth: "65px",background: "#EAF8EE"}}>
            <i className="fa-solid fa-wallet fs-3" style={{ color: "#2E7D32" }}></i>
          </div>
        </div>
      </div>


      {/* Income */}
      <div className="col-6 col-md-6 col-lg-3">
        <div className="rounded-4 p-4 h-100 d-flex justify-content-between align-items-center dashboard-card"
          style={{background: "#E5E8FF",boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
          <div className="flex-grow-1">
            <h6 className="fw-normal mb-2" style={{ color: "#3246ff" }}>
              TOTAL INCOME
            </h6>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-indian-rupee-sign me-2 card-amount-icon" style={{ fontSize: "22px" }}></i>
              <h4 className="fw-bold mb-0">
                {income.toLocaleString("en-IN")}
              </h4>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center rounded-circle ms-3 card-icon-circle"
          style={{width: "65px",height: "65px",minWidth: "65px",background: "#F2F4FF"}}>
            <i className="fa-solid fa-arrow-trend-up fs-3 text-primary"></i>
          </div>
        </div>
      </div>


      {/* Expense */}
      <div className="col-6 col-md-6 col-lg-3">
        <div className="rounded-4 p-4 h-100 d-flex justify-content-between align-items-center dashboard-card"
          style={{background: "#FCE8E8",boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
          <div className="flex-grow-1">
            <h6 className="fw-normal mb-2 text-danger">
              TOTAL EXPENSES
            </h6>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-indian-rupee-sign me-2 card-amount-icon" style={{ fontSize: "22px" }}></i>
              <h4 className="fw-bold mb-0">
                {expense.toLocaleString("en-IN")}
              </h4>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center rounded-circle ms-3 card-icon-circle"
          style={{width: "65px",height: "65px",minWidth: "65px",background: "#FFF3F3"}}>
            <i className="fa-solid fa-arrow-trend-down fs-3 text-danger"></i>
          </div>
        </div>
      </div>


      {/* Saving */}
      <div className="col-6 col-md-6 col-lg-3">
        <div className="rounded-4 p-4 h-100 d-flex justify-content-between align-items-center dashboard-card"
        style={{background: "#E8F7EF",boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
          <div className="flex-grow-1">
            <h6 className="fw-normal mb-2" style={{ color: "#198754" }}>
              TOTAL SAVINGS
            </h6>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-indian-rupee-sign me-2 card-amount-icon" style={{ fontSize: "22px", color: "#198754" }}></i>
              <h4 className="fw-bold mb-0">
                {totalSaved.toLocaleString("en-IN")}
              </h4>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center rounded-circle ms-3 card-icon-circle"
          style={{width: "65px",height: "65px",minWidth: "65px",background: "#F1FBF5"}}>
            <i className="fa-solid fa-piggy-bank fs-3" style={{ color: "#198754" }}></i>
          </div>
        </div>
      </div>

    </div>
  );
}