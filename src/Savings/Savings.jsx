import { useState , useEffect } from 'react'
import SavingsHeading from './SavingsHeading'
import SavingProgress from './SavingProgress'
import SavingDashboard from './SavingDashboard'
import SavingsFooter from './SavingsFooter'
import SavingManagement from './SavingManagement'
import DisplaySavings from './DisplaySavings'
import ToasterMsg from './ToasterMsg'


export default function Savings({goals,setGoals,savings,setSavings}) {    
    //toast msg
    const [toastMessage, setToastMessage] = useState("");
    const [activeTab,setActiveTab] = useState("target");

    let addGoals = (goal) => {
        setGoals((prev) => [
            ...prev,
            {
                ...goal,
                id:Date.now()
            }
        ]);
        setToastMessage("Savings goal created successfully!");
        setTimeout(() => {
            setToastMessage("");
        },5000)
    }
    let addSavings = (saving) => {
        setSavings((prev) => [
            ...prev,
            {
                ...saving,
                id:Date.now()
            }
        ]);
        setToastMessage(`₹${Number(saving.amount).toLocaleString("en-IN")} successfully saved!`);
        setTimeout(() => {
            setToastMessage("");
        },10000);
    }

    const deleteGoal = (id) => {
        setGoals((prev) => prev.filter((goal) => goal.id !== id));
        setSavings((prev) => prev.filter((saving) =>saving.goalId !== id ));
    };

    const deleteSaving = (id) => {
        setSavings((prev) => prev.filter((saving) => saving.id !== id));
    };

    //start a new savings goal
    const handleNewGoal = () => {
        //open target tab
        setActiveTab("target");
        //move user down to the savings goal tab
        setTimeout(() => {
            document.getElementById("saving-management") 
            ?.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        },100);
    };

    return(
        <div>
            <SavingsHeading />

            <SavingProgress goals={goals} savings={savings} 
            activeTab={activeTab} setActiveTab={setActiveTab} handleNewGoal={handleNewGoal}/>

            <SavingDashboard savings={savings} goals={goals}/>

            <div id='saving-management'>
                <SavingManagement goals={goals} savings={savings} addGoals={addGoals} addSavings={addSavings}
                activeTab={activeTab} setActiveTab={setActiveTab} /> 
            </div>

            <DisplaySavings goals={goals} savings={savings} deleteGoal={deleteGoal} 
            deleteSaving={deleteSaving}/>

            <ToasterMsg  toastMessage={toastMessage}/>

            <SavingsFooter />
        </div>
    )
}