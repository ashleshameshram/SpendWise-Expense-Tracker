import { useState } from 'react'
import './MonthlySummary.css'

export default function MonthlySummary({transactions}) {
    const today = new Date();
    const currentMonth = today.toLocaleString('en-IN', { month : "long" });

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    const monthlyTransaction = transactions.filter((t) => 
        t.date.includes(selectedMonth)
    );
    const MonthlyIncome = monthlyTransaction.filter((t) => 
        t.type === 'Income'
    );
    const MonthlyExpense = monthlyTransaction.filter((t) =>
        t.type === 'Expense'
    );

    let totalIncome = 0;
    for(const t of MonthlyIncome){
        totalIncome += Number(t.amount);
    }

    let totalExpense = 0;
    for(const t of MonthlyExpense){
        totalExpense += Number(t.amount);
    }

    let balance = totalIncome - totalExpense;

    return(
        <div className='p-4 rounded-4 monthly-summary ' style={{backgroundColor:"#eeecff"}}>
            <h4 className='monthly-summary-title'>Monthly Summary</h4>
            <div className='input-group monthly-month-select'>
                <span className="input-group-text">
                    <i className="fa-solid fa-calendar-days"></i>
                </span>
                <select className='form-control' value={selectedMonth} 
                onChange={(e) => setSelectedMonth(e.target.value)}>
                    <option value="">Choose Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
            <div className="row mt-4 monthly-summary-values">
                <div className="col monthly-summary-item">
                    <h5>Income</h5>
                    <h5 className='text-success monthly-summary-amount'>
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        {totalIncome.toLocaleString("en-IN")}
                    </h5>
                </div>
                <div className="col monthly-summary-item">
                    <h5>Expenses</h5>
                    <h5 className='text-danger monthly-summary-amount'>
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        {totalExpense.toLocaleString("en-IN")}
                    </h5>
                </div>
                <div className="col monthly-summary-item">
                    <h5  className="monthly-summary-amount">Balance</h5>
                    <h5 style={{color:"rgb(14, 95, 0)"}}><i className="fa-solid fa-indian-rupee-sign"></i>
                    {balance.toLocaleString("en-IN")}</h5>
                </div>
            </div>
        </div>
    )
}