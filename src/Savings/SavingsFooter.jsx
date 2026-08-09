import React from 'react'

export default function SavingsFooter() {
    return (
        <div className='mt-4 rounded-2 px-3 d-flex align-items-center justify-content-between'
        style={{backgroundColor:"rgb(192, 199, 254)"}}>
            <div className='d-flex align-items-center '>
                <div className="ms-4 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px",height: "50px",backgroundColor: "rgb(252, 252, 253)"}}>
                    <i className="fa-solid fa-lightbulb" style={{color: "rgb(255, 212, 59)",fontSize:"30px"}}></i>
                </div>
                <div className='ms-3 mt-3 lh-1'>
                    <h5>Smart Saving Tip</h5>
                    <p>Save a small amount daily, and big dreams will follow.</p>
                </div>
            </div>
            <div className='me-4 p-1'>
                <img src='/savingPlant.png' style={{width:"80px"}}></img>
            </div>      
        </div>
    )
}