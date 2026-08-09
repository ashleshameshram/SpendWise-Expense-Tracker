import React, { useEffect,useRef } from 'react'
import confetti from 'canvas-confetti';

export default function SavingsMessage({progress,completedGoals,activeGoals,handleNewGoal}) {
    let progressMessage = '';
    const allGoalsCompleted = activeGoals.length === 0 && completedGoals.length > 0;

    // Prevent confetti from firing again on every render
    const prevCompletedCount = useRef(completedGoals.length);

    useEffect(() => {
        // Fire confetti only when a NEW goal becomes completed
        if(completedGoals.length > prevCompletedCount.current){
            confetti({
                particleCount: 300,
                spread:200,
                origin: {
                    y:0.5
                }
            });
        }
        prevCompletedCount.current = completedGoals.length;
    },[completedGoals.length]);

    // All goals completed
    if(allGoalsCompleted){
        progressMessage = `🎉 Congratulations !! You've completed all your savings goals.`;
    }
    // A goal was completed and another goal is active
    else if(completedGoals.length > 0 && activeGoals.length > 0){
        const completedGoal = completedGoals[completedGoals.length - 1];
        const goalText = activeGoals.length === 1
        ? "1 active goal"
        : `${activeGoals.length} active goals`;

        progressMessage = `🎉 Congratulations!!  ${completedGoal.goalName} Goal is now completed! 
        You still have ${goalText} active goals to work towards.`;
    }
    //normal active goal progress
    else if(progress >= 100){
        progressMessage = "🎉 Amazing! you've reached your saving goal.";
    }else if(progress >= 80){
        progressMessage = "🔥 Almost there! You've close to reaching your goal.";
    }else if(progress >= 50){
        progressMessage = "⭐ Great Progress! Keep building your savings.";
    }else if(progress > 0){
        progressMessage = "⭐ You're on your way! Keep contributing towards your goal.";
    }else{
        progressMessage = "🌱 Start saving today and take the first step towards your goal.";
    }
    return(
        <div className="p-3 rounded-4 d-flex align-items-center justify-content-between"
        style={{backgroundColor: "#fcdaff",border: "1px solid black"}}>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{width: "42px",height: "42px",minWidth: "42px",backgroundColor: "#f9f9f5"}}>
                    <i className="bi bi-lightbulb-fill"style={{color: "#e5a900",fontSize: "23px"}}></i>
                </div>

                <div>
                    <p className="mb-1 fw-semibold" style={{fontSize:"18px"}}>
                        Smart Saving
                    </p>
                    <p className="mb-0" style={{fontSize:"15px" ,color: "#46005c"}}>
                        {progressMessage}
                    </p>
                </div>
            </div>
            <div>
                {allGoalsCompleted && (
                    <button type="button" className="btn btn-sm mt-2 p-2" onClick={handleNewGoal}
                    style={{backgroundColor: "#6f42c1",color: "#fff",
                    borderRadius: "6px",fontSize: "15px"}}>
                        <i className="bi bi-plus-circle me-2"></i>
                        Start New Goal
                    </button>
                )}
             </div>
        </div>
    )
}