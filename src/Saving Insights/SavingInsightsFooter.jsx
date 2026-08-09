import React from "react";

export default function SavingInsightsFooter() {
  return (
    <div className="container-fluid p-0 mt-4">

      <div className="rounded-4 px-4 py-3 d-flex align-items-center justify-content-between"
      style={{backgroundColor: "#e1d9fd"}}>

        {/* Left Content */}
        <div className="d-flex align-items-center gap-3">

          {/* Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
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
          <div>

            <h6 className="fw-bold mb-1">
              Keep going!
            </h6>

            <p className="text-secondary small mb-0">
              You're doing amazing. Stay consistent and achieve your next goal! 🚀
            </p>

          </div>

        </div>


        {/* Button */}
        <button
          className="btn text-white fw-semibold rounded-3 px-4 py-2"
          style={{
            backgroundColor: "#3730a3",
            minWidth: "156px",
          }}
        >
          Set New Goal
        </button>

      </div>

    </div>
  );
}