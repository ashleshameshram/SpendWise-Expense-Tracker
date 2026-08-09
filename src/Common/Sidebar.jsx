import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
        <div className="logo">
            <div className="logo-icon">
                <i className="bi bi-wallet2" style={{color:"#8287f1"}}></i>
            </div>
            <h2>SpendWise</h2>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
            <NavLink to="/" className="sidebar-link">
                <i className="bi bi-arrow-down-up fs-5"></i>
                <span style={{fontSize:"17px"}}>Transactions</span>
            </NavLink>
            <hr />

            <NavLink to="/analysis" className="sidebar-link">
                <i className="bi bi-graph-down fs-5"></i>
                <span style={{fontSize:"17px"}}>Transaction Analytics</span>
            </NavLink>
            <hr />

            <NavLink to="/savings" className="sidebar-link">
                <i className="bi bi-bank fs-5"></i>
                <span style={{fontSize:"17px"}}>Savings</span>
            </NavLink>
            <hr />

            <NavLink to="/savings-insights-page" className="sidebar-link">
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
  );
}