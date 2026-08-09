import { useState } from "react";
import SetTargetForm from "./SetTargetForm";
import SetSavingForm from "./SetSavingForm";

export default function SavingsManagement({savings,activeTab,setActiveTab,goals,addGoals,
addSavings}) {
    return (
        <div className="mt-4 bg-white shadow-lg rounded-4 p-4 mx-4">
            {/* Heading */}
            <div className="mb-4">
                <h4 className="fw-bold mb-1">Savings Management</h4>
                <p className="text-muted mb-0">
                    Manage your savings goals and contributions.
                </p>
            </div>

            {/* Tabs */}
            <button type="button" className="btn me-3" onClick={() => setActiveTab("saving")}
                style={{
                    backgroundColor:
                        activeTab === "saving" ? "rgb(12, 0, 119)" : "#fff",
                    color:
                        activeTab === "saving" ? "#fff" : "rgb(12, 0, 119)",
                    border: "1px solid rgb(12, 0, 119)"
                }}>
                <i className="bi bi-piggy-bank me-2"></i>
                Add Savings
            </button>

            <button type="button" className="btn" onClick={() => setActiveTab("target")}
                style={{
                    backgroundColor:
                        activeTab === "target" ? "rgb(12, 0, 119)" : "#fff",
                    color:
                        activeTab === "target" ? "#fff" : "rgb(12, 0, 119)",
                    border: "1px solid rgb(12, 0, 119)"
                }}>
                <i className="bi bi-bullseye me-2"></i>
                Set Target
            </button>


            {/* Conditional Rendering */}
            {activeTab === "saving" && (
                <div className="border rounded-4 p-4 bg-light mt-3">
                    <h4 className="mb-3">Add Savings</h4>
                    <SetSavingForm savings={savings} addSavings={addSavings} goals={goals} />
                </div>
            )}

             {activeTab === "target" && (
                <div className="border rounded-4 p-4 bg-light mt-3">
                    <h4 className="mb-3">Set Savings Target</h4>
                    <SetTargetForm  addGoals={addGoals}/>
                </div>
            )}  

        </div>
    );
}