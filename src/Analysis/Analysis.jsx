import React, {lazy, Suspense} from 'react'

const ExpenseAnalysis =  lazy(() => import ('./ExpenseAnalysis.jsx'))
const MonthlySpendingChart = lazy(() => import('./MonthlySpendingChart'))

import './Analysis.css'

export default function Analysis({transactions}) {
    return(
        <div className="flex-wrap analysis-page">
            <div className="analysis-content">
                <Suspense fallback={
                    <p className="text-center p-4" style={{ minHeight: "300px" }}>
                        Loading Analysis...
                    </p>
                }>
                    <ExpenseAnalysis transactions={transactions}/>
                    <MonthlySpendingChart transactions={transactions}/>
                </Suspense>
                
            </div>
        </div>
    )
}