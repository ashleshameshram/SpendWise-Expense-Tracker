import { useState, useEffect} from 'react'
import TransactonForm from './Overview/TransactionForm.jsx'
import RecentTransaction from './Overview/RecentTransaction.jsx'
import ExpenseAnalysis from './Analysis/ExpenseAnalysis.jsx'
import { Routes, Route } from "react-router-dom";
import './ExpenseHomePage.css'

import Sidebar from './Common/Sidebar.jsx'
import Overview from "./Overview/Overview.jsx";
import Analysis from "./Analysis/Analysis.jsx";
import Savings from "./Savings/Savings.jsx";
import SavingInsightsPage from './Saving Insights/SavingInsightsPage.jsx';


export default function ExpenseHomePage({userName}) {
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({description : "",
        amount : "", category : "", type: ""});
    
    //check the localStorage. IF something is stored , use that not then use an Empty Array.
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("StoreTransaction");
        return saved ? JSON.parse(saved) : [];
    });

    //save whenever transactions change
    useEffect(() => {
        localStorage.setItem("StoreTransaction",JSON.stringify(transactions));
        
    },[transactions]);

    let addTransaction = (transactions) => {
        setTransactions(prev => [...prev, {...transactions, id:Date.now() }]);
    }

    let deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    }

    let editTransaction = (transactions) => {
        setEditingId(transactions.id);
        setEditForm({
            description: transactions.description,
            amount: transactions.amount,
            category: transactions.category,
            type: transactions.type
        });
    }

    let updateTransaction = (updated) => {
        setTransactions(prev => prev.map(t => t.id === updated.id ? updated : t));
        setEditingId(null);
        setEditForm({description:"", amount:"", category:"", type:""});
    }

    let income = 0;
    let expense = 0;
    for(let i=0; i<transactions.length; i++){
        const t = transactions[i];
        if(t.type === 'Income'){
            income = income + Number(t.amount);
        }

        if(t.type === 'Expense'){
            expense = expense + Number(t.amount);
        }
    }
    let balance = income - expense;

    //savings state
    const [savings,setSavings] = useState(() => {
        const savedSavings = localStorage.getItem("Savings");
        return savedSavings ? JSON.parse(savedSavings) : [];
    });
    useEffect(() => {
        localStorage.setItem("Savings", JSON.stringify(savings));
    }, [savings]);

    //savings Goal State
    const [goals,setGoals] = useState(() => {
        const savedGoals = localStorage.getItem("SavingGoals");
        return savedGoals ? JSON.parse(savedGoals) : [];
    });

    useEffect(() => {
        localStorage.setItem("SavingGoals", JSON.stringify(goals));
    },[goals]);

    return (
        <div className="layout">
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={
                        <Overview
                        savings={savings}
                        income={income}
                        expense={expense}
                        balance={balance}
                        transactions={transactions}
                        onAdd={addTransaction}
                        onUpdate={updateTransaction}
                        onDelete={deleteTransaction}
                        onEdit={editTransaction}
                        editingId={editingId}
                        editForm={editForm}
                        userName={userName}
                        />
                    }/>

                    <Route path="/analysis" element={<Analysis transactions={transactions} />} />

                    <Route path="/savings" element={<Savings 
                        savings={savings} 
                        setSavings={setSavings}
                        goals={goals}
                        setGoals={setGoals}
                    />} />

                    <Route path="/savings-insights-page" element={<SavingInsightsPage 
                        goals={goals} 
                        savings={savings} 
                    />
                    }/>
                </Routes>
            </main>
        </div>
);
}