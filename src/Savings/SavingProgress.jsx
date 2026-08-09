import React from 'react'
import SavingsMessage from './SavingsMessage';

export default function SavingProgress({goals,savings,handleNewGoal}) {
    //calculate progress for every goal
    const goalWithProgress = goals.map((goal) => {
        const savedAmount = savings.filter((saving) => saving.goalId === goal.id)
        .reduce((total,saving) =>  total + Number(saving.amount),0);
        
        const targetAmount = Number(goal.targetAmount);
        const isCompleted = savedAmount >= targetAmount;

        return {
            ...goal,
            savedAmount,
            isCompleted
        };
    });

    const completedGoals = goalWithProgress.filter((goal) => goal.isCompleted);
    const activeGoals = goalWithProgress.filter((goal) => !goal.isCompleted);
   
    // Total target of active goals only
    const targetAmount = activeGoals.reduce((total, goal) => {
        return total + Number(goal.targetAmount);
    }, 0);

    // Total saved toward active goals only
    const savedAmount = activeGoals.reduce((total, goal) => {
        return total + Number(goal.savedAmount);
    }, 0);

    // Progress of active goals
    const progress = targetAmount > 0 ? Math.round((savedAmount / targetAmount) * 100) : 0;

    // Remaining amount for active goals
    const remaining = Math.max(targetAmount - savedAmount, 0);

    return(
        <div className="px-4 mt-1">
        <div className="bg-white rounded-4 shadow-lg p-3">
            <div className='d-flex align-items-center'>
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px",height: "40px",backgroundColor: "rgb(221, 217, 253)"}}>
                    <i className="fa-solid fa-bullseye" style={{color: "rgb(12, 0, 119)",fontSize:"20px"}}></i>
                </div>
                <h5 className='ms-3 mb-0'>Overall Savings Progress</h5> 
            </div>

            <div className='row align-items-center'>
                {/* left side */}
                <div className='col-8 mb-5 mt-3'>
                    <div className='d-flex align-items-center '>
                        <h1 className='ms-2'> ₹{savedAmount.toLocaleString("en-IN")}</h1>
                        <h5 className='ms-2'>/₹{targetAmount.toLocaleString("en-IN")} </h5>
                    </div>
                   
                    <div className='ms-2 progress rounded-pill' role='progressbar' aria-label="Default striped example" style={{height:"10px"}}>
                        <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" 
                        style={{width:`${progress}%`, backgroundColor:"#6f42c1",height:"10px"}}>
                        </div>
                    </div>

                    <p className="fw-semibold mt-2 ms-3" style={{color:"#6f42c1"}}>
                        {progress}% Completed
                    </p>
                    <div className='ms-2 p-3 rounded-3' style={{backgroundColor:"#dfd5fa"}}>
                        <p className='mb-0 text-secondary'>
                            💜 ₹{remaining.toLocaleString()} left to reach your goal
                        </p>
                    </div> 
                </div>  

                {/* right side */}
                {/* outer circle */}
                <div className='col-4 mb-4 d-flex justify-content-center align-items-center h-100'>
                    <div style={{
                        width:"200px",
                        height:"200px",
                        borderRadius:"50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: `conic-gradient(#6f42c1  ${progress}%, #e9ecef ${progress}%)`}}>
                        
                        {/* inner circle */}
                            <div style={{
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                            }}>
                            <h2 style={{margin: 0,color: "#6f42c1",fontWeight: "700"}}>
                                {progress}%
                            </h2>
                            <p style={{margin: 0,color: "#6c757d",fontSize: "14px"}}>
                                Complete
                            </p>
                        </div> 
                    </div>
                </div>
            </div>

            <SavingsMessage progress={progress} completedGoals={completedGoals}
            activeGoals={activeGoals}  handleNewGoal={handleNewGoal}/>
        </div>
        </div>
    )
}