import React from "react";
import Heading from "../Common/Heading";
import Dashboard from "./Dashboard";
import TransactionForm from "./TransactionForm";
import RecentTransaction from "./RecentTransaction";
import './Overview.css'

export default function Overview({savings,income,expense,balance,transactions,onAdd,onUpdate,
  onDelete,onEdit,editingId,editForm,userName}) {
    
  const hour = new Date().getHours();
  let greeting = '';
  let icon = " ";
  let iconColor = "";
  let bgColor = "";

  if(hour < 12){
    greeting = "Good Morning";
    icon = "bi bi-sunrise-fill"
    iconColor = "#F59E0B";
    bgColor = "#FEF3C7";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    icon = "bi bi-sun-fill";
    iconColor = "#F97316";
    bgColor = "#FFEDD5";
  } else {
    greeting = "Good Evening";
    icon = "bi bi-moon-stars-fill";
    iconColor = "#6366F1";
    bgColor = "#dfdffd";
  }
  return (
    <div className="overview-container">
        <Heading userName={userName} greeting={greeting} icon={icon} iconColor={iconColor} bgColor={bgColor}/>

        <Dashboard savings={savings} income={income} expense={expense} balance={balance} />
        <TransactionForm transactions={transactions} onAdd={onAdd} onUpdate={onUpdate} editForm={editForm}
              editingId={editingId}/>

        <RecentTransaction transactions={transactions} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}