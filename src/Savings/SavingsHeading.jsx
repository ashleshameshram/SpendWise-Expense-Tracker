import React from 'react'
import './SavingsHeading.css'

export default function SavingsHeading() {
    return (
        <div className='d-flex justify-content-between px-4 savings-heading-container'>
            <div className='d-flex align-items-center gap-3 savings-heading-left'>
                <div className="rounded-circle d-flex justify-content-center align-items-center savings-icon"
                style={{width: "50px",height: "50px",backgroundColor: "#d9e1fc"}}>
                    <i className="bi bi-wallet-fill" style={{ color: "rgb(12, 0, 119)",fontSize:"22px" }}></i>
                </div>

                <div className='mt-2 savings-content'>
                    <h4 className="savings-title">Savings</h4>
                    <p className='text-muted fw-normal lh-1 savings-subtitle'>Track your saving goals and grow your future.</p>
                </div>
            </div>
            <div className='savings-image-wrap'>
                <img src='/saving.png' className="savings-image" style={{width:"100px"}}></img>
            </div>
        </div>
    )
}