import React from 'react'
import ExpenseAnalysis from './ExpenseAnalysis'
import MonthlySpendingChart from './MonthlySpendingChart'
import './Analysis.css'

export default function Analysis({transactions}) {
    return(
        <div className="flex-wrap analysis-page">
            <div className="analysis-content">
                <ExpenseAnalysis transactions={transactions}/>
                <MonthlySpendingChart transactions={transactions}/>
            </div>
        </div>
    )
}