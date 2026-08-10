import React from 'react'
import {  ResponsiveContainer,CartesianGrid,LineChart, XAxis, YAxis, Line, Tooltip } 
from 'recharts';
import './MonthlySpendingChart.css'

export default function MonthlySpendingChart({transactions}) {
    const monthlyExpense = [
        {month : "Jan", amount : 0},
        {month : "Feb", amount : 0},
        {month : "Mar", amount : 0},
        {month : "Apr", amount : 0},
        {month : "May", amount : 0},
        {month : "Jun", amount : 0},
        {month : "Jul", amount : 0},
        {month : "Aug", amount : 0},
        {month : "Sep", amount : 0},
        {month : "Oct", amount : 0},
        {month : "Nov", amount : 0},
        {month : "Dec", amount : 0},
    ];

    transactions.forEach((t) => {
        if(t.type === 'Expense'){
            const monthIndex = new Date(t.date).getMonth();
            monthlyExpense[monthIndex].amount += Number(t.amount);
            
        }
    });

    return(
        <div className='m-4 mt-5 shadow-lg p-3 border rounded-4 monthly-spending-card'>
            <h4 className='ms-3 monthly-spending-title'>
                Monthly Spending Chart
            </h4>
            <div className="monthly-chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart  data={monthlyExpense} margin={{top: 10,right: 10,left: 5,bottom: 5}}>
                    <XAxis dataKey="month" />
                    <YAxis width={80} tickFormatter={(value) => `₹${value.toLocaleString("en-IN")}`}/>
                    <Tooltip />
                    <Line type="monotone" 
                        dataKey="amount" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        dot={{ r: 5 }} 
                        activeDot={{ r: 8 }}/>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}