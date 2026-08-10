import './Heading.css'

export default function Heading({ userName, greeting, icon, iconColor, bgColor }) {
    return (
        <div className="heading-container d-flex align-items-center mb-3 p-4 gap-3 "
        style={{ backgroundColor: "rgba(248, 248, 249, 0.67)" }}>
            <div className="heading-icon px-3 py-2 rounded-circle d-flex align-items-center justify-content-center"
            style={{ backgroundColor: bgColor }}>
                <i className={icon} style={{ color: iconColor,fontSize:"25px" }}></i>
            </div>

            <div className="heading-content">
                <h4 className="mb-0 fw-bold">
                    {greeting}, &nbsp;
                    <span style={{ color: "rgba(244, 14, 129, 0.98)" }}>{userName}👋</span>
                </h4>
                <p className="text-muted mb-0">Here's your financial overview.</p>
            </div>
        </div>
    );
}