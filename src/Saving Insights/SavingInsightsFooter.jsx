import React from "react";
import './SavingInsightsFooter.css'

export default function SavingInsightsFooter() {
  return (
    <div className="container-fluid p-0 mt-4 saving-insights-footer">

      <div className="rounded-4 px-4 py-3 d-flex align-items-center justify-content-between footer-box"
      style={{backgroundColor: "#e1d9fd"}}>

        {/* Left Content */}
        <div className="d-flex align-items-center gap-3 footer-content">

          {/* Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 footer-icon"
            style={{
              width: "58px",
              height: "58px",
              backgroundColor: "#e7e2ff",
              color: "#4338ca",
            }}
          >
            <i className="bi bi-stars fs-3"></i>
          </div>


          {/* Message */}
          <div className="footer-message">

            <h6 className="fw-bold mb-1">
              Keep going!
            </h6>

            <p className="text-secondary small mb-0">
              You're doing amazing. Stay consistent and achieve your next goal! 🚀
            </p>
          </div>
        </div>


        {/* Image */} 
        <div className="footer-image-wrapper flex-shrink-0"> 
          <img src="./savemoney.png" alt="Saving money" className="footer-image" /> 
        </div>

      </div>

    </div>
  );
}