import React from 'react'
import ExpenseAnalysis from './ExpenseAnalysis'
import MonthlySpendingChart from './MonthlySpendingChart'

export default function Analysis({transactions}) {
    return(
        <div className="flex-wrap">
            <div>
                <ExpenseAnalysis transactions={transactions}/>
                <MonthlySpendingChart transactions={transactions}/>
            </div>
        </div>
    )
}