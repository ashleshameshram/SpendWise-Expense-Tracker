import { useState, useEffect } from 'react'
import QuickSummary from './QuickSummary';
import './TransactionForm.css'

export default function TransactonForm({transactions,onAdd, onUpdate, editForm, editingId}) {
    const [formData, setFormData] = useState({description : "",amount : "", category : "",type: ""});  
    const [errors, setErrors] = useState({description : "", amount : "", category : "",type: ""}); 

    let validate = () => {
        const newErrors =  {description : "",amount : "", category : "",type: ""} ;
        let isValid = true;
        
        if(!formData.description.trim()){
            newErrors.description = "Description is required";
            isValid = false;
        }

        if(!formData.amount){
            newErrors.amount = "Amount is required";
            isValid = false;
        }else if(Number(formData.amount) <= 0) {
            newErrors.amount = "Invalid Amount";
            isValid = false;
        }

        if(!formData.category){
            newErrors.category = "Please choose a category ";
            isValid = false;
        }

        if(!formData.type){
            newErrors.type = "Please choose a type";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    let handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        });
    }

    let handleTransaction = () => {
        if(!validate()) return ;  //stop here if anything invalid found

        const today = new Date();
        const dateStr = today.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric'});

        if (editingId) {
            onUpdate({ ...formData, date: dateStr, id: editingId });  //sends data to parent (update)
        } else {
            onAdd({ ...formData, date: dateStr });  //sends data to parent (ADD)
        }
        setFormData({description : "",amount : "", category : "",type: ""}); 
        setErrors({description : "",amount : "", category : "",type: ""});
    }

    useEffect(() => {
        if (editingId) {
            setFormData(editForm);
        }
    }, [editingId, editForm]);

    return(
        <div className='row rounded-4 transaction-row' style={{marginLeft:"30px", gap:"30px"}} >
            <div className="col-6 border border-secondary rounded-4 p-4 form-card">        
            <h5>{editingId ? "Edit Transaction" : "Add Transaction"}</h5>
            <p className='text-muted' style={{lineHeight:"1"}}>Record your income and expense</p>

            <div className="row my-1">
                <div className="col-8">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className={`form-control ${errors.description ? "is-invalid" : '' }`} 
                    placeholder="e.g Zomato Order" 
                    id="description" name="description" value={formData.description} 
                    onChange={handleChange}/>
                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                </div>

                <div className="col-4">
                    <label htmlFor="amount" className="form-label">Amount (₹)</label>
                    <input type="number" name="amount" className={`form-control ${errors.amount ? "is-invalid" : ''}`} 
                    id="amount" min="1" value={formData.amount} onChange={handleChange} placeholder='0.00'/>
                    {errors.amount && <div className='invalid-feedback'>{errors.amount}</div>}
                </div>
            </div>

            <div className="row">
                <div className='col'>
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select className={`form-select ${errors.category ? 'is-invalid' : ''}`} name="category" id="category" 
                    value={formData.category} onChange={handleChange} >
                        <option disabled value="">Choose Category</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Bills">Bills</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Salary">Salary</option>
                        <option value="Transport">Transport</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        <option value="Gift">Gift</option>
                        <option value="Rent">Rent</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Pets">Pets</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.category && (
                        <div className='invalid-feedback'>{errors.category}</div>
                    )}
                </div>

                <div className='col'>
                    <label htmlFor="type" className="form-label">
                        Type
                    </label>
                    <select className={`form-select ${errors.type ? 'is-invalid' : ''}`} id="type" value={formData.type}
                    onChange={handleChange} name="type">
                        <option value="" disabled>Choose Type</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                    {errors.type && (
                        <div className='invalid-feedback'>{errors.type}</div>
                    )}
                </div>
            </div>

            <div className="d-grid gap-2 mt-4">
                <button type="button" className="btn btn-primary" onClick={handleTransaction}>
                <i className="fa-solid fa-plus"></i>&nbsp; {editingId ? "Save Changes" : "Add Transaction"}</button>
            </div>
        
        </div> 
        <div className="col-5 border border-secondary rounded-4 p-2 summary-card">
            <QuickSummary  transactions={transactions}/>
        </div>
        </div>
    )
}   