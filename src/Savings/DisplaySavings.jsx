import React from 'react'
import SavingsGoal from './SavingsGoal'
import RecentContribution from './RecentContribution'

export default function DisplaySavings({goals,savings,deleteGoal,deleteSaving}) {
    const goalWithStatus = goals.map((goal) => {
        const savedAmount = savings
            .filter((saving) => saving.goalId === goal.id)
            .reduce(
                (total, saving) => total + Number(saving.amount),
                0
            );
        return {
            ...goal,
            savedAmount,
            isCompleted:
                savedAmount >= Number(goal.targetAmount)
        };
    });
    // Goals that are still in progress
    const activeGoals = goalWithStatus.filter(
        (goal) => !goal.isCompleted
    );
    // Goals that have actually reached their target
    const completedGoals = goalWithStatus.filter(
        (goal) => goal.isCompleted
    );

    return(
       <div className="container py-3">
            <div className="row gy-4">
                <div className="col-12 col-lg-6">
                    <SavingsGoal goals={activeGoals} savings={savings} deleteGoal={deleteGoal}
                    completedGoals={completedGoals}/>
                </div>
                <div className='col-12 col-lg-6'>
                    <RecentContribution goals={goals} savings={savings} deleteGoal={deleteGoal}
                    deleteSaving={deleteSaving}/>
                </div>
            </div>
        </div>
    )
}