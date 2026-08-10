import React from 'react'
import './QuickSummary.css'

export default function QuickSummary({transactions}) {
    //today's spending
    const today = new Date().toLocaleDateString("en-GB", {day: "numeric", month: "long",
    year: "numeric"});
    const todayTransactions = transactions.filter((t) => 
        t.type === "Expense" && t.date === today    
    );
    let totalSpending = todayTransactions.reduce((total, transaction) => {
        return total + Number(transaction.amount)
    },0);

    //this month's spending
    const currentMonth = new Date().getMonth() + 1;
    const currentMonthLong = new Date().toLocaleString("en-GB",{ month: "long"});

    const monthTransactions = transactions.filter((t) => {
        const transactionMonth = new Date(t.date).getMonth() + 1;
        return(
            t.type === "Expense" && transactionMonth === currentMonth
        );
    });
    let totalMonthSpending = monthTransactions.reduce((total,transaction) => {
        return total + Number(transaction.amount)
    },0);

    //last month long
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    const lastMonthLong = lastMonthDate.toLocaleString("en-GB", {month: "long"});
    
    //Last Month Spending
    const lastMonth = currentMonth - 1;
    if(lastMonth === 0){
        lastMonth = 12;
    }
    const lastMonthTransaction = transactions.filter((t) => {
        const transactionLastMonth = new Date(t.date).getMonth() + 1;
        return(
            t.type === "Expense" && transactionLastMonth === lastMonth
        );
    });
    let totalLastMonthSpending = lastMonthTransaction.reduce((total,transaction) => {
        return total + Number(transaction.amount)
    },0);

    //Top Spending
    const expenseTransaction = transactions.filter((t) => 
        t.type === 'Expense'
    );
    const categoryTotals = {};

    expenseTransaction.forEach((t) => {
        if(categoryTotals[t.category]){
            categoryTotals[t.category] += Number(t.amount);
        }else{
            categoryTotals[t.category] = Number(t.amount);
        }
    });
    const categories = Object.entries(categoryTotals);
    let topCategory = ""
    let highestAmount = 0;
    
    categories.forEach((t) => {
        if(t[1] > highestAmount){
            topCategory = t[0];
            highestAmount = t[1];
        }
    });
    
    return (
         <div className='p-3'>
            <h5 className="mb-3">Quick Summary</h5>
            <div className="row g-0 mt-4 quick-summary-row">
                <div className="col-6 border-end border-bottom pb-3 pe-3 d-flex align-items-center gap-3 summary-item">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 summary-icon"
                         style={{width:"48px", height:"48px", backgroundColor:"#E1F5EE"}}>
                        <i className="bi bi-cash-stack" style={{color:"#0F6E56"}}></i>
                    </div>
                    <div>
                        <p className="text-muted mb-1 summary-label" style={{fontSize:"13px"}}>Today's Spending</p>
                        <p className="fw-bold mb-0 summary-value" style={{color:"#F87171", fontSize:"22px"}}>
                            ₹{totalSpending.toLocaleString("en-IN")}
                        </p>
                    </div>
                </div>

                <div className="col-6 border-bottom pb-3 ps-3 d-flex align-items-center gap-3 summary-item">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 summary-icon"
                         style={{width:"48px", height:"48px", backgroundColor:"#FAECE7"}}>
                        <i className="bi bi-calendar-month" style={{color:"#D85A30"}}></i>
                    </div>
                    <div>
                        <p className="text-muted mb-1 summary-label" style={{fontSize:"13px"}}>This Month's Spending</p>
                        <p className="text-muted mb-0 fw-bold summary-sublabel" style={{fontSize:"13px"}}>{currentMonthLong}</p>
                        <p className="fw-bold mb-0 summary-value" style={{color:"#EF4444", fontSize:"22px"}}>
                            ₹{totalMonthSpending.toLocaleString("en-IN")}
                        </p>
                    </div>
                </div>

                <div className="col-6 border-end pt-3 pe-3 d-flex align-items-center gap-3 summary-item">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 summary-icon"
                         style={{width:"48px", height:"48px", backgroundColor:"#FAEEDA"}}>
                        <i className="bi bi-pie-chart" style={{color:"#BA7517"}}></i>
                    </div>
                    <div>
                        <p className="text-muted mb-1 summary-label" style={{fontSize:"13px"}}>Top Spending</p>
                        <p className="text-muted mb-0 fw-bold summary-sublabel" style={{fontSize:"13px"}}>{topCategory}</p>
                        <p className="fw-bold mb-0 summary-value" style={{fontSize:"20px",color:"#8B5CF6"}}>
                            ₹{highestAmount.toLocaleString("en-IN")}
                        </p>
                    </div>
                </div>

                
                <div className="col-6 pt-3 ps-3 d-flex align-items-center gap-3 summary-item">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 summary-icon"
                         style={{width:"48px", height:"48px", backgroundColor:"#EEEDFE"}}>
                        <i className="bi bi-receipt" style={{color:"#534AB7"}}></i>
                    </div>
                    <div>   
                        <p className="text-muted mb-1 summary-label" style={{fontSize:"13px"}}>Last Month Spending</p>
                        <p className="text-muted mb-0 fw-bold summary-sublabel" style={{fontSize:"13px"}}>{lastMonthLong}</p>
                        <p className="fw-bold mb-0 summary-value" style={{fontSize:"20px",color:"#3B82F6"}}>₹{totalLastMonthSpending}</p>
                    </div>
                </div>
        </div>
        </div> 
    )
}