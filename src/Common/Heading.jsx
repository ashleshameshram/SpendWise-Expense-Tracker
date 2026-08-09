import React from 'react'

export default function Heading({userName,greeting, icon, iconColor, bgColor}) {
    return(
        <div className="d-flex align-items-center gap-2 mb-3 p-3">
            <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px",height: "50px",backgroundColor: bgColor}}>
                <i className={icon} style={{color: iconColor,fontSize: "22px"}}></i>
            </div>

            <div>
                <h4 className="mb-0 fw-bold">{greeting}, {userName}👋</h4>
                <p className="text-muted mb-0">
                    Here's your financial overview.
                </p>
            </div>
        </div>
    );  
}