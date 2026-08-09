import React from 'react'
import SavingsGoal from './SavingsGoal'
import RecentContribution from './RecentContribution'

export default function DisplaySavings({goals,savings,deleteGoal,deleteSaving}) {
    const activeGoals = goals.filter((goal) => {
        const savedAmount = savings
            .filter((saving) => saving.goalId === goal.id)
            .reduce((total, saving) => total + Number(saving.amount), 0);
        return savedAmount < Number(goal.targetAmount);
    });

    return(
       <div className="container py-3">
            <div className="row">
                <div className="col-6 ">
                    <SavingsGoal goals={activeGoals} savings={savings} deleteGoal={deleteGoal}/>
                </div>
                <div className='col-6'>
                    <RecentContribution goals={goals} savings={savings} deleteGoal={deleteGoal}
                    deleteSaving={deleteSaving}/>
                </div>
            </div>
        </div>
    )
}