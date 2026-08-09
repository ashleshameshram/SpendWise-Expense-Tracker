import React from 'react';
import SavingInsightsHeading from './SavingInsightsHeading';
import SavingInsightsDashboard from './SavingInsightsDashboard';
import SavingInsightsAnalytics from './SavingInsightsAnalytics';
import SavingInsightsSummary from './SavingInsightsSummary';
import SavingCompletedGoals from './SavingCompletedGoals';
import SavingInsightsFooter from './SavingInsightsFooter';

export default function SavingsInsightsPage({ goals, savings }) {
    //total saved savings
    const totalSaved = savings.reduce(
        (total,saving) => total + Number(saving.amount),0
    );
    //Next Goal
    const activeGoal = goals.map((goal) => {
        const savedAmount = savings.filter((saving) => saving.goalId === goal.id)
            .reduce((total, saving) => total + Number(saving.amount),0);
        
        const targetAmount = Number(goal.targetAmount);
        const progress = targetAmount > 0 ? (savedAmount/targetAmount) * 100 : 0;
        
        return{ 
            ...goal,
            savedAmount,
            progress,
            remaining : Math.max(targetAmount - savedAmount , 0),
        };      
    }).filter((goal) => goal.savedAmount < Number(goal.targetAmount));

    const nextGoal = activeGoal.sort((a,b) => b.progress - a.progress)[0];
    
    //calculate progress of every goal
    const goalWithProgress = goals.map((goal) => {
        const savedAmount = savings
        .filter((saving) => saving.goalId === goal.id)
        .reduce((total,saving) => total + Number(saving.amount),0);

        return{
            ...goal,
            savedAmount,
            isCompleted: savedAmount >= Number(goal.targetAmount)
        }
    });

    //Completed Goals
    const completedGoals = goalWithProgress.filter((goal) => goal.isCompleted);
    //Active Goals 
    const activeGoals = goalWithProgress.filter((goal) => !goal.isCompleted);

    

    //this month savings
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const thisMonthSavings = savings.filter((saving) => {
        const savingDate = new Date(saving.date);
        return(
            savingDate.getMonth() === currentMonth &&
            savingDate.getFullYear() === currentYear
        );
    }).reduce((total,saving) => total + Number(saving.amount),0);

    //Last month saving
    const lastMonthDate = new Date(currentYear,currentMonth - 1,1);
    const lastMonth = lastMonthDate.getMonth();
    const lastMonthYear = lastMonthDate.getFullYear();

    const lastMonthSaving = savings.filter((saving) => {
        const savingDate = new Date(saving.date);
        return(
            savingDate.getMonth() === lastMonth &&
            savingDate.getFullYear() === lastMonthYear
        );
    }).reduce((total,saving) => total + Number(saving.amount),0);

    //growth
    let growth = null;
    if(lastMonthSaving > 0){
        growth = ((thisMonthSavings - lastMonthSaving)/ lastMonthSaving) * 100;
        growth = Number(growth.toFixed(1));
    }
    
    const growthPrefix = growth > 0 ? "+" : "";
 
    //last 12 month savings data
    const monthlyData = [];

    // Last 12 months
    for (let i = 11; i >= 0; i--) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth() - i,
      1
    );
    const month = date.toLocaleString("en-US", {
      month: "short",
    });
    const year = date.getFullYear();
    const monthSavings = savings.filter((saving) => {
        const savingDate = new Date(saving.date);
        return (
          savingDate.getMonth() === date.getMonth() &&
          savingDate.getFullYear() === date.getFullYear()
        );
    }).reduce((total, saving) => total + Number(saving.amount),0);

    monthlyData.push({
            month: `${month} ${String(year).slice(-2)}`,
            amount: monthSavings,
        });
    }

    //Avg Monthly Saving
    const savingMonths = new Set(); //accepts empty unique collections {}
    savings.forEach((saving) => {
        const savingDate = new Date(saving.date);
        const monthKey = `${savingDate.getFullYear()} - ${savingDate.getMonth()}`;
        savingMonths.add(monthKey);  //we have added unique monthKey in savingsMonth
    });

    const averageMonthlySavings = savingMonths.size >= 2 
        ? totalSaved / savingMonths.size : null;

    return (
        <div>
            <SavingInsightsHeading />

            <SavingInsightsDashboard growthPrefix={growthPrefix} nextGoal={nextGoal}
            growth={growth} goals={goals} totalSaved={totalSaved}
            completedGoals={completedGoals} activeGoals={activeGoals}/>

            <SavingInsightsAnalytics monthlyData={monthlyData} 
            goals={goals} savings={savings}/>

            <SavingInsightsSummary  savings={savings} averageMonthlySavings={averageMonthlySavings}
            thisMonthSavings={thisMonthSavings} lastMonthSaving={lastMonthSaving}
            growth={growth} growthPrefix={growthPrefix}/>

            <SavingCompletedGoals savings={savings} completedGoals={completedGoals}/>

            <SavingInsightsFooter />
        </div>
    );
}
