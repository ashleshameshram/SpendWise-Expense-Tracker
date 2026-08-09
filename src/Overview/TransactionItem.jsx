import React from "react";

export default function TransactionItem({transaction,onDelete,onEdit}) {
    const categoryIcons = {
        food: "fa-utensils",
        shopping: "fa-bag-shopping",
        salary: "fa-briefcase",
        transport: "fa-car",
        entertainment: "fa-film",
        bills: "fa-file-invoice-dollar",
        health: "fa-heart-pulse",
        education: "fa-graduation-cap",
        travel: "fa-plane",
        mobile: "fa-mobile-screen-button",
        electronics : "fa-laptop",
        fitness : "fa-dumbbell",
        groceries : "fa-cart-shopping",
        pets : "fa-paw",
        gift: "fa-gift",
        rent : "fa-building",
        savings: "fa-piggy-bank",
    };
    const icon = categoryIcons[transaction.category.toLowerCase()] || "fa-wallet";

    return (
        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            {/* Left Section */}
            <div className="d-flex align-items-center gap-3">
                {/* Category Circle */}
                <div
                    className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
                    style={{width: "45px",height: "45px",
                        backgroundColor:
                        transaction.type === "Income" ? "#d4edda" : "#fde2e2",
                        color:
                        transaction.type === "Income" ? "#198754" : "#dc3545",
                    }}>
                    <i className={`fa-solid ${icon}`}></i>
                </div>

                {/* Transaction Details */}
                <div>
                    <div className="fw-semibold">{transaction.description}</div>
                    <small className="text-muted">{transaction.category}</small>
                    {transaction.date && (
                        <>
                        <span className="mx-2 text-muted">•</span>
                        <small className="text-muted">
                            <i className="fa-regular fa-calendar-days me-1"></i>
                            {transaction.date}
                        </small>
                        </>
                    )}
                </div>
            </div>
            {/* Right Section */}
            <div className="d-flex align-items-center gap-4">
                <span className={`fw-bold ${transaction.type === "Income" ? "text-success" : "text-danger"}`}>
                    {transaction.type === "Income" ? "+" : "-"}
                    <i className="fa-solid fa-indian-rupee-sign me-1"></i>
                    {Number(transaction.amount).toLocaleString("en-IN")}
                </span>

                <i className="fa-solid fa-pen text-primary" style={{ cursor: "pointer" }}
                onClick={() => onEdit(transaction)}></i>

                <i className="fa-solid fa-trash text-danger" style={{ cursor: "pointer" }}
                onClick={() => onDelete(transaction)}></i>
            </div>
        </div>
  );
}