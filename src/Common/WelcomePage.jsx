import React, { useState } from 'react'

export default function WelcomePage({onContinue}) {
    let [name,setName] = useState("");

    let handleContinue = () => {
        if(!name.trim()) return
        onContinue(name.trim());
    }

    return(
         <div className="d-flex align-items-center justify-content-center" 
            style={{height: "100vh", background: "rgba(244, 216, 255, 0.74)"}}>
            <div className=" bg-white rounded-4 p-4 shadow" style={{width: "350px"}}>
                <h4 className="mb-2">What should we call you?</h4>
                <p className="text-muted" style={{fontSize: "14px"}}>
                    We'll use this to personalize your dashboard.
                </p>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleContinue()}
                />
                <button className="btn btn-primary w-100" onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    )
}