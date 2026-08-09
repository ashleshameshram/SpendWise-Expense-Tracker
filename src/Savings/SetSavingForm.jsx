import { useState } from 'react'

export default function SetSavingForm({goals,savings, addSavings}) {
    const [savingForm, setSavingForm] = useState({
        goalId: "",
        amount: "",
        date: "",
        method: "",
        note: ""
    });
    const [errors,setErrors] = useState({
        goalId: "",
        amount: "",
        date: "",
        method: "",
    });

     let validate = () => {
        const newErrors =  {goalId : "",amount : "", date : "",method: ""} ;
        let isValid = true;
        
        if(!savingForm.goalId){
            newErrors.goalId = "Goal Name is required";
            isValid = false;
        }

        if(!savingForm.amount){
            newErrors.amount = "Saving Amount is required";
            isValid = false;
        }else if(Number(savingForm.amount) <= 0) {
            newErrors.amount = "Invalid Amount";
            isValid = false;
        }else {
            const selectedGoal = goals.find((goal) => goal.id === savingForm.goalId);
            if(selectedGoal) {
                const alreadySaved = savings
                    .filter((saving) => saving.goalId === selectedGoal.id)
                    .reduce(
                        (total, saving) => total + Number(saving.amount),
                        0
                    );

                const remainingAmount =
                    Number(selectedGoal.targetAmount) - alreadySaved;

                if(Number(savingForm.amount) > remainingAmount) {
                    newErrors.amount =
                        `You can save only ₹${remainingAmount.toLocaleString("en-IN")} more for this goal. 
                        Target amount is fixed.Or create new goal`;
                    isValid = false;
                }
            }
        }

        if(!savingForm.date){
            newErrors.date = "Please choose a date ";
            isValid = false;
        }

        if(!savingForm.method){
            newErrors.method = "Please select a saving method type";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }
    
    const completedGoals = goals.filter((goal) => {
        const savedAmount = savings
            .filter((saving) => saving.goalId === goal.id)
            .reduce((total,saving) => total + Number(saving.amount),0);
        return savedAmount >= Number(goal.targetAmount);
    }).map((goal) => goal.id);

    const handleSavingChange = (e) => {
        const {name, value} = e.target;

        setSavingForm({
            ...savingForm,
            [name]: name === 'goalId' ? Number(value) : value 
        });
    };

    let handleSavings = (e) => {
        e.preventDefault();
        if(!validate()) return ;

        addSavings(savingForm);       
        setSavingForm({
            goalId: "",
            amount: "",
            date: "",
            method: "",
            note: ""
        });
        setErrors({
            goalId: "",
            amount: "",
            date: "",
            method: "",
        });
    }

    return(
        <form onSubmit={handleSavings}>
            <div className="row">
                {/* Goal */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Goal
                    </label>

                    <select className={`form-control ${errors.goalId ? "is-invalid" : '' }`}
                    name="goalId" value={savingForm.goalId} onChange={handleSavingChange}>
                        <option value="">Select Goal</option>
                        {goals.map((goal) => (
                            <option key={goal.id} value={goal.id} 
                            disabled={completedGoals.includes(goal.id)}>
                                {goal.goalName}
                                {completedGoals.includes(goal.id) ? " (Completed goal)" : ''}
                            </option>
                        ))}
                    </select>
                    {errors.goalId && <div className='invalid-feedback'>{errors.goalId}</div>}

                </div>

                {/* Amount */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Saving Amount
                    </label>
                    <input type="number" className={`form-control ${errors.amount ? "is-invalid" : '' }`} 
                    name="amount" placeholder="₹5,000" value={savingForm.amount} 
                    onChange={handleSavingChange}/>
                    {errors.amount && <div className='invalid-feedback'>{errors.amount}</div>}
                </div>

                {/* Date */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Date
                    </label>
                    <input type="date"  className={`form-control ${errors.date ? "is-invalid" : '' }`}
                    name="date" value={savingForm.date} onChange={handleSavingChange}/>
                    {errors.date && <div className='invalid-feedback'>{errors.date}</div>}

                </div>

                {/* Saving Method */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                        Saving Method
                    </label>
                    <select  className={`form-control ${errors.method ? "is-invalid" : '' }`} 
                    name="method" value={savingForm.method} onChange={handleSavingChange}>
                        <option value="">Select Method</option>
                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Bank Transfer</option>
                        <option>Cheque</option>
                        <option>Other</option>
                    </select>
                    {errors.method && <div className='invalid-feedback'>{errors.method}</div>}

                </div>

                {/* Note */}
                <div className="col-12 mb-4">
                    <label className="form-label fw-semibold">
                    Note <span style={{fontStyle:"italic"}}>(Optional)</span>
                    </label>
                    <textarea
                        rows="2"
                        className="form-control"
                        name="note"
                        placeholder="Optional..."
                        value={savingForm.note}
                        onChange={handleSavingChange}
                    ></textarea>
                </div>

                <div className="col-12">
                    <button type='submit' className="btn w-100"
                    style={{backgroundColor: "rgb(12,0,119)",color: "#fff"}}>
                        Add Savings
                    </button>
                </div>
            </div>
        </form>
    )
}