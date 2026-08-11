import React from 'react'
import './SavingInsightsHeading.css'

export default function SavingInsightsHeading() {
    return(
        <div className='d-flex justify-content-between px-4 savings-insights-heading'>
            <div className='d-flex align-items-center gap-3 savings-insights-heading-content'>
                <div className="rounded-circle d-flex justify-content-center align-items-center savings-insights-heading-icon"
                style={{width: "50px",height: "50px",backgroundColor: "#d9e1fc"}}>
                    <i className="bi bi-trophy-fill" style={{ color: "rgb(12, 0, 119)",fontSize:"22px" }}></i>
                </div>

                <div className='mt-2 savings-insights-heading-text'>
                    <h4>Savings Insights</h4>
                    <p className='text-muted fw-normal lh-1'>Track your saving performance and celebrate your achievement.</p>
                </div>
            </div>

            <div className="savings-insights-heading-image">
                <img src='/saving.png' style={{width:"100px"}}></img>
            </div>   
        </div>
    )
}