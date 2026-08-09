export default function ToasterMsg({toastMessage}) {
    return(
        <div>
            {toastMessage && (
                <div className="position-fixed bottom-0 end-0 m-4"
                style={{zIndex: 1055,width: "330px",backgroundColor: "#ffffff",
                borderRadius: "16px",boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                overflow: "hidden",border: "1px solid #eee8ff"}}>
                    <div className="d-flex align-items-center p-3">
                        {/* Icon */}
                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3"
                        style={{width: "45px",height: "45px",minWidth: "45px",backgroundColor: "#eee8ff"}}>
                            <i className="bi bi-check-lg" style={{color: "#6f42c1",fontSize: "22px"}}></i>
                        </div>

                        {/* Message */}
                        <div>
                            <p className="mb-1 fw-semibold" style={{fontSize: "15px",color: "#292929"}}>
                                Success!
                            </p>
                            <p className="mb-0" style={{fontSize: "14px",color: "#6c757d",lineHeight: "1.4"}}>
                                <i className="bi bi-trophy" style={{color:"#f0dd4d"}}></i> &nbsp; {toastMessage}
                            </p>
                        </div>
                    </div>

                    {/* 3 second progress line */}
                    <div style={{height: "4px",backgroundColor: "#6f42c1",animation: "toastProgress 3s linear forwards"}}>
                    </div>
                </div>
            )}
        </div>
    )
}