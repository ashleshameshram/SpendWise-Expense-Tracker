import { useState } from "react";
import SetTargetForm from "./SetTargetForm";
import SetSavingForm from "./SetSavingForm";
import './SavingManagement.css'

export default function SavingsManagement({savings,activeTab,setActiveTab,goals,addGoals,
addSavings}) {
    return (
        <div className="mt-4 bg-white shadow-lg rounded-4 p-4 mx-4 savings-mgmt-card">
            {/* Heading */}
            <div className="mb-4 sm-heading">
                <h4 className="fw-bold mb-1 sm-title">Savings Management</h4>
                <p className="text-muted mb-0 sm-subtitle">
                    Manage your savings goals and contributions.
                </p>
            </div>

            {/* Tabs */}
            <div className="sm-tabs">
            <button type="button" className="btn me-3 sm-tab-btn" onClick={() => setActiveTab("saving")}
                style={{
                    backgroundColor:
                        activeTab === "saving" ? "rgb(12, 0, 119)" : "#fff",
                    color:
                        activeTab === "saving" ? "#fff" : "rgb(12, 0, 119)",
                    border: "1px solid rgb(12, 0, 119)"
                }}>
                <i className="fa-solid fa-plus"></i> &nbsp;
                Add Savings
            </button>

            <button type="button" className="btn sm-tab-btn" onClick={() => setActiveTab("target")}
                style={{
                    backgroundColor:
                        activeTab === "target" ? "rgb(12, 0, 119)" : "#fff",
                    color:
                        activeTab === "target" ? "#fff" : "rgb(12, 0, 119)",
                    border: "1px solid rgb(12, 0, 119)"
                }}>
                <i className="fa-solid fa-rocket"></i> &nbsp;
                Set Target
            </button>
            </div>


            {/* Conditional Rendering */}
            {activeTab === "saving" && (
                <div className="border rounded-4 p-4 bg-light mt-3 sm-content-box">
                    <h4 className="mb-3 sm-content-title">Add Savings</h4>
                    <SetSavingForm savings={savings} addSavings={addSavings} goals={goals} />
                </div>
            )}

             {activeTab === "target" && (
                <div className="border rounded-4 p-4 bg-light mt-3 sm-content-box">
                    <h4 className="mb-3 sm-content-title">Set Savings Target</h4>
                    <SetTargetForm  addGoals={addGoals}/>
                </div>
            )}  

        </div>
    );
}