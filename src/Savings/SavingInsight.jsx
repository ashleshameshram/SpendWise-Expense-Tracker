import React from 'react'

export default function SavingInsight({ savings,goals, growth, totalSaved, thisMonthSaving }) {
    //growth msg
    let insightMessage = '';

    if (growth > 0) {
        insightMessage = `Savings increased by ${growth}% vs last month.`;
    } else if (growth < 0) {
        insightMessage = `Savings decreased by ${Math.abs(growth)}% vs last month.`;
    } else {
        insightMessage = 'Savings are same as last month.';
    }

    // This month saving messag
    let savingMessage = '';

    if (thisMonthSaving > 0) {
        savingMessage = `₹${thisMonthSaving.toLocaleString("en-IN")} saved this month.`;
    } else {
        savingMessage = "No savings added this month yet.";
    }

    // Calculate progress for every goal
    const goalWithProgress = goals.map((goal) => {
    const savedAmount = savings
        .filter((saving) => saving.goalId === goal.id)
        .reduce((total, saving) => total + Number(saving.amount), 0);

        const targetAmount = Number(goal.targetAmount);
        const isCompleted = savedAmount >= targetAmount;
        return {
            ...goal,
            savedAmount,
            targetAmount,
            isCompleted
        };
    });
     // Separate completed and active goals
    const completedGoals = goalWithProgress.filter(
        (goal) => goal.isCompleted
    );

    const activeGoals = goalWithProgress.filter(
        (goal) => !goal.isCompleted
    );

    // Goal message
    let goalMesssage = '';

    if (goals.length === 0) {
        goalMesssage = "Set a saving goal to track your progress.";
    } 
    else if (activeGoals.length === 0) {
        goalMesssage = "🎉 Amazing! You've completed all your savings goals.";
    } 
    else if (completedGoals.length > 0) {
        const activeGoal = activeGoals[0];
        const goalProgress = activeGoal.targetAmount > 0
        ? Math.round((activeGoal.savedAmount / activeGoal.targetAmount) * 100) : 0;
        
        goalMesssage = `🎉 You've completed ${completedGoals.length} savings 
        goal ${completedGoals.length > 1 ? 's' : ''}. ${activeGoal.goalName} is 
        ${goalProgress}% complete.`;
    } 
    else {
        const activeGoal = activeGoals[0];
        const goalProgress = activeGoal.targetAmount > 0
        ? Math.round((activeGoal.savedAmount / activeGoal.targetAmount) * 100) : 0;
        
        goalMesssage = `${goalProgress}% of your ${activeGoal.goalName}
         savings goal completed.`;
    }

    return (
        <div className='rounded-4 p-3 me-3'
        style={{backgroundColor: "#fbe8fd",border: "1px solid #f0f0f5"}}>
            {/* Header */}
            <div className="d-flex align-items-center mb-3">
                <div className="rounded-3 d-flex justify-content-center align-items-center me-3"
                    style={{width: "42px",height: "42px", minWidth: "42px",backgroundColor: "#fff1d2"}}>
                    <i className="bi bi-lightbulb-fill"
                    style={{color: "#fbd154",fontSize: "24px"}}></i>
                </div>
                <div>
                    <h5 className="mb-1 fw-semibold">
                        Quick Insights
                    </h5>
                </div>
            </div>


            {/* Growth */}
            <div className="d-flex align-items-start px-2 py-2 mb-2 rounded-3"
            style={{backgroundColor: "#fff"}}>
                <i className="bi bi-stars me-2 mt-1"
                style={{color: "#FFD700"}}></i>
                <p className="mb-0" style={{fontSize: "16px",lineHeight: "1.4"}}>
                    {insightMessage}
                </p>
            </div>


            {/* Saving */}
            <div className="d-flex align-items-start px-2 py-2 mb-2 rounded-3"
            style={{backgroundColor: "#fff"}}>
                <i className="bi bi-stars me-2 mt-1"
                style={{color: "#FFD700"}}></i>
                <p className="mb-0" style={{fontSize: "16px",lineHeight: "1.4"}}>
                    {savingMessage}
                </p>
            </div>


            {/* Goal */}
            <div className="d-flex align-items-start px-2 py-2 rounded-3"
            style={{backgroundColor: "#fff"}}>
                <i className="bi bi-stars me-2 mt-1"
                style={{color: "#FFD700"}}></i>
                <p className="mb-0" style={{fontSize: "16px",lineHeight: "1.4"}}>
                    {goalMesssage}
                </p>
            </div>
        </div>
    )
}