import { useState } from 'react'

export default function SetTargetForm({addGoals}) {
    const [targetForm, setTargetForm] = useState({
        goalName: "",
        targetAmount: "",
        targetDate: "",
        goalType: "",
        note: ""
    });
    const [errors, setErrors] = useState({
        goalName: "",
        targetAmount: "",
        targetDate: "",
        goalType: "",
    });
    let validate = () => {
        const newErrors =  {goalName : "",targetAmount : "", targetDate : "",goalType: ""} ;
        let isValid = true;
        
        if(!targetForm.goalName.trim()){
            newErrors.goalName = "Goal Name is required";
            isValid = false;
        }

        if(!targetForm.targetAmount){
            newErrors.targetAmount = "Target Amount is required";
            isValid = false;
        }else if(Number(targetForm.targetAmount) <= 0) {
            newErrors.targetAmount = "Invalid Amount";
            isValid = false;
        }

        if(!targetForm.targetDate){
            newErrors.targetDate = "Please choose a target date ";
            isValid = false;
        }

        if(!targetForm.goalType){
            newErrors.goalType = "Please choose a Goal type";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleTargetChange = (e) => {
        setTargetForm({
            ...targetForm,
            [e.target.name]: e.target.value
        });
    };
    let handleSaveTarget = (e) => {
        e.preventDefault();
        if(!validate()) return ;  //stop here if anything invalid found
        addGoals(targetForm);

        setTargetForm({
            goalName: "",
            targetAmount: "",
            targetDate: "",
            goalType: "",
            note: ""
        });
        setErrors({
            goalName: "",
            targetAmount: "",
            targetDate: "",
            goalType: "",
        });
    }

    return(
       <form>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Goal Name
                    </label>
                    <input type="text" className={`form-control ${errors.goalName ? "is-invalid" : '' }`}
                    name="goalName" placeholder="e.g. Emergency Fund" value={targetForm.goalName}
                    onChange={handleTargetChange}/>
                    {errors.goalName && <div className='invalid-feedback'>{errors.goalName}</div>}
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Goal Type
                    </label>
                    <select className={`form-control ${errors.goalType ? "is-invalid" : '' }`}
                    name="goalType" value={targetForm.goalType} onChange={handleTargetChange}>
                        <option value="">Select Goal</option>
                        <option>Emergency Fund</option>
                        <option>Vacation</option>
                        <option>Technology</option>
                        <option>Vehicle</option>
                        <option>Family Support</option>
                        <option>Health & Medical</option>
                        <option>Shopping</option>
                        <option>Festivals & gift</option>
                        <option>Bussiness/Side Hustle</option>
                        <option>Home</option>
                        <option>Education</option>
                        <option>Investment</option>
                        <option>Retirement</option>
                        <option>Wedding</option>
                        <option>Other</option>
                    </select>
                    {errors.goalType && <div className='invalid-feedback'>{errors.goalType}</div>}
                </div>

                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Target Amount
                    </label>
                    <input type="number" className={`form-control ${errors.targetAmount ? "is-invalid" : '' }`}
                    name="targetAmount" placeholder="₹500" value={targetForm.targetAmount}
                    onChange={handleTargetChange}/>
                    {errors.targetAmount && <div className='invalid-feedback'>{errors.targetAmount}</div>}
                </div>

                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Target Date
                    </label>
                    <input type="date" className={`form-control ${errors.targetDate ? "is-invalid" : '' }`} 
                    name="targetDate" value={targetForm.targetDate} onChange={handleTargetChange}/>
                    {errors.targetDate && <div className='invalid-feedback'>{errors.targetDate}</div>}
                </div>

                <div className="col-12 mb-4">
                    <label className="form-label fw-semibold">
                        Note <span style={{fontStyle:"italic"}}>(Optional)</span>
                    </label>
                    <textarea rows="2" className="form-control"name="note"
                        placeholder="Optional note..."value={targetForm.note}
                        onChange={handleTargetChange}></textarea>
                </div>

                <div className="col-12">
                    <button type="button" className="btn w-100" onClick={handleSaveTarget}
                    style={{backgroundColor: "rgb(12, 0, 119)",color: "#fff"}}>
                        Save Target
                    </button>
                </div>

            </div>

</form>
    )
}