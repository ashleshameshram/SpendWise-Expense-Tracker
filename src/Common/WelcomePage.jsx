import React, { useState } from 'react'
import './WelcomePage.css'

export default function WelcomePage({onContinue}) {
    let [name,setName] = useState("");

    let handleContinue = () => {
        if(!name.trim()) return
        onContinue(name.trim());
    }

    return(
        <div className="welcome-page">
            <div className="welcome-blob welcome-blob-1"></div>
            <div className="welcome-blob welcome-blob-2"></div>
            <div className="welcome-blob welcome-blob-3"></div>

            <div className="welcome-card">
                <div className="welcome-icon-badge">
                    <i className="bi bi-wallet2"></i>
                </div>

                <h4 className="welcome-title">What should we call you?</h4>
                <p className="welcome-subtitle">
                    We'll use this to personalize your dashboard.
                </p>

                <div className="welcome-input-wrap">
                    <i className="bi bi-person welcome-input-icon"></i>
                    <input
                        type="text"
                        className="form-control welcome-input"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
                    />
                </div>

                <button className="welcome-btn" onClick={handleContinue}>
                    Continue
                    <i className="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
        </div>
    )
}