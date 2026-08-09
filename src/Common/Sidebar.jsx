import { NavLink } from "react-router-dom";
import { useState } from 'react';
import "./Sidebar.css";

export default function Sidebar() {
    const [isOpen ,setIsOpen] = useState(false);
    const closedSidebar = () => {
        setIsOpen(false);
    }
  return (
    <>  
        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
            <i className="bi bi-list"></i>
        </button>
         {/* Mobile Overlay */} 
        {isOpen && (
            <div className="sidebar-overlay" onClick={closedSidebar}>
            </div>
        )}
            <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
            {/* Logo */}
                <div className="logo">
                    <div className="logo-icon">
                        <i className="bi bi-wallet2" style={{color:"#8287f1"}}></i>
                    </div>
                    <h2>SpendWise</h2>

                    {/* Mobile Close Button ONLY */}
                    <button className="mobile-close-btn" onClick={closedSidebar}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>


                {/* Navigation */}
                <nav className="sidebar-nav">
                    <NavLink to="/" className="sidebar-link" onClick={closedSidebar}>
                        <i className="bi bi-arrow-down-up fs-5"></i>
                        <span style={{fontSize:"17px"}}>Transactions</span>
                    </NavLink>
                    <hr />

                    <NavLink to="/analysis" className="sidebar-link" onClick={closedSidebar}>
                        <i className="bi bi-graph-down fs-5"></i>
                        <span style={{fontSize:"17px"}}>Transaction Analytics</span>
                    </NavLink>
                    <hr />

                    <NavLink to="/savings" className="sidebar-link" onClick={closedSidebar}>
                        <i className="bi bi-bank fs-5"></i>
                        <span style={{fontSize:"17px"}}>Savings</span>
                    </NavLink>
                    <hr />

                    <NavLink to="/savings-insights-page" className="sidebar-link" 
                    onClick={closedSidebar}>
                        <i className="bi bi-clipboard-data fs-5"></i>
                        <span style={{fontSize:"17px"}}>Savings Insights</span>
                    </NavLink>
                    <hr />
                </nav>

                <div className="sidebar-footer">
                    <p> Track your expenses <br /> smartly and <br />save more! </p>
                    <img src="/wallet.png" alt="Wallet" className="wallet-image"/>
                </div>
            </aside>
    </>
  );
}