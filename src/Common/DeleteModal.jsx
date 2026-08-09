import React from 'react'

export default function DeleteModal({deleteTarget,onDelete,onCancel}) {
    if (!deleteTarget) return null;
    return(
        <>
        {deleteTarget && (
            <div className="mt-2 alert alert-warning d-flex justify-content-between align-items-center" role="alert">
                <span>Delete "<strong>{deleteTarget.description}</strong>"?</span>
                <div>
                    <button className="btn btn-sm btn-danger me-2" 
                        onClick={() => { 
                            onDelete(deleteTarget.id);  
                        }}> Yes, delete
                    </button>
                    <button className="btn btn-sm btn-outline-secondary"
                        onClick={onCancel} > Cancel
                    </button>
                </div>
            </div>
        )}
        </>

    )
}