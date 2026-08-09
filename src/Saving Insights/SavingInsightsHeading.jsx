import React from 'react'

export default function SavingInsightsHeading() {
    return(
        <div className='d-flex justify-content-between px-4'>
            <div className='d-flex align-items-center gap-3'>
                <div className="rounded-circle d-flex justify-content-center align-items-center"
                style={{width: "50px",height: "50px",backgroundColor: "#d9e1fc"}}>
                    <i className="bi bi-trophy-fill" style={{ color: "rgb(12, 0, 119)",fontSize:"22px" }}></i>
                </div>

                <div className='mt-2 '>
                    <h4>Savings Insights</h4>
                    <p className='text-muted fw-normal lh-1'>Track your saving performance and celebrate your achievement.</p>
                </div>
            </div>
            <div>
                <img src='/saving.png' style={{width:"100px"}}></img>
            </div>   
        </div>
    )
}