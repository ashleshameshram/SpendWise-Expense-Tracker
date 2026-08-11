import { useState } from 'react'
import './RecentContribution.css'

export default function RecentContribution({ goals, savings,deleteSaving }) {
    const [showModal , setShowModal] = useState(false);
    const [selectedSavingId, setSelectedSavingId] = useState(null);

    const savingIcons = {
        "Emergency Fund": "bi bi-shield-check",
        "Vacation": "bi bi-airplane",
        "Technology": "bi bi-laptop",
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
        "Other": "bi bi-cash-coin"
    };

    const savingColors = {
        "Vacation": "#d6edfe",
        "Emergency Fund": "#fccce0",
        "Technology": "#eabcfc",
        "Vehicle": "#f7cbff",
        "Family Support": "#d5fec2",
        "Health & Medical": "#f3bcfd",
        "Shopping": "#cff6cd",
        "Festivals & gift": "#fbdac6",
        "Business/Side Hustle": "#fec8bc",
        "Home": "#ffdae6",
        "Education": "#f9d9cd",
        "Investment": "#d3f5f9",
        "Retirement": "#fbb5e5",
        "Wedding": "#ffc7c7",
        "Other": "#fccee2"
    };

    let handleDeleteClick = (id) => {
        setSelectedSavingId(id);
        setShowModal(true);
    }

    return (
        <div className="shadow-lg rounded-4 p-4 bg-white rc-card">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 rc-header">
                <h4 className="fw-bold mb-0 rc-title">
                    Recent Contributions
                </h4>

                <small className="text-muted fw-semibold rc-count">
                    {savings.length} Contributions
                </small>
            </div>

            <div className="contribution-list">
                {savings.length === 0 ? (
                    <p className="text-center py-4 fs-5 fw-semibold rc-empty" style={{color:"#001463"}}>
                        <i className="bi bi-piggy-bank me-2"></i>
                        No contributions Yet. Add your first saving contribution.
                    </p>
                ) : (
                    [...savings].reverse().map((saving, index) => {
                        const goal = goals.find((goal) => goal.id === saving.goalId);
                        if (!goal) return null;

                        const icon = savingIcons[goal.goalType] || savingIcons["Other"];
                        const bgColor = savingColors[goal.goalType] || savingColors["Other"];

                        return (
                            <div key={saving.id}
                            className={`py-3 rc-item ${index !== savings.length - 1 ? "border-bottom" : "" }`}>

                                <div className="d-flex align-items-center">
                                    {/* Icon */}
                                    <div className="rounded-circle d-flex justify-content-center align-items-center rc-icon"
                                        style={{width: "48px",height: "48px",minWidth: "48px",
                                            backgroundColor: bgColor}}>
                                        <i className={icon + " rc-icon-i"}
                                            style={{fontSize: "25px"}}>
                                        </i>
                                    </div>

                                    {/* Details */}
                                    <div className="ms-3 flex-grow-1 rc-details">
                                        <div className="d-flex justify-content-between align-items-center rc-top-row">
                                            <div className="rc-left">
                                                <div className='d-flex rc-name-date-row'>
                                                    <h6 className="fw-semibold mb-1 rc-name">
                                                        {goal.goalName}
                                                    </h6>
                                                    {/* Date */}
                                                    <small className="text-muted ms-2 rc-date" style={{fontSize:"13px"}}>
                                                        <i className="bi bi-calendar3 me-1"></i>
                                                        {new Date(saving.date).toLocaleDateString("en-GB", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </small>
                                                </div>    
                                                <div className="d-flex align-items-center flex-wrap gap-2 mt-2 rc-badges">
                                                    

                                                    {/* Goal Type */}
                                                    <span className="badge rounded-pill px-2 py-1 rc-badge-type"
                                                    style={{backgroundColor: bgColor,color: "#333",fontWeight: "500"}}>
                                                        {goal.goalType}
                                                    </span>

                                                    {/* Saving Method */}
                                                    <span className="badge rounded-pill px-2 py-1 rc-badge-method"
                                                        style={{backgroundColor: "#dce9ff",color: "#1a237e",fontWeight: "500"}}>
                                                        {saving.method}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-end rc-right">
                                                <div className="d-flex align-items-center">
                                                    <span className="fw-semibold text-success rc-amount"
                                                    style={{fontSize: "17px"}}>
                                                        +₹
                                                        {Number(
                                                            saving.amount
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </span>

                                                    <button className="btn btn-sm p-0 ms-2 rc-delete"
                                                    onClick={() => handleDeleteClick(saving.id)}>
                                                        <i className="bi bi-trash3 text-danger"
                                                        style={{fontSize: "15px"}}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            {showModal && (
                <div>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"
                    onClick={() => setShowModal(false)}>
                    </div>

                    {/* Modal */}
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 rounded-4 shadow">

                                {/* Header */}
                                <div className="modal-header border-0 pb-0">
                                    <h5 className="modal-title fw-bold text-danger">
                                        <i className="bi bi-trash3 me-2"></i>
                                        Delete Contribution
                                    </h5>

                                    <button type="button" className="btn-close"
                                        onClick={() => setShowModal(false)}>
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="modal-body pt-2">
                                    <p className="mb-2 fs-5">
                                        Are you sure you want to delete this contribution?
                                    </p>
                                    <small className="text-muted">
                                        This action cannot be undone.
                                    </small>
                                </div>

                                {/* Footer */}
                                <div className="modal-footer border-0">
                                    <button className="btn btn-light"
                                    onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>

                                    <button className="btn btn-danger"
                                        onClick={() => {
                                            deleteSaving(selectedSavingId);
                                            setShowModal(false);
                                        }}>
                                    <i className="bi bi-trash3 me-1"></i>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}