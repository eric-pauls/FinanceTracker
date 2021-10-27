import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


const EditLineItem = ({lineItemToEdit}) => {
    const [date, setDate] = useState(lineItemToEdit.date);
    const [description, setDescription] = useState(lineItemToEdit.description);
    const [category, setCategory] = useState(lineItemToEdit.category);
    const [amount, setAmount] = useState(lineItemToEdit.amount);
   
    const history = useHistory();

    const editLineItem = async () => {
        const editedLineItem = {date, description, category, amount};
        const response = await fetch(`lineItems/${lineItemToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedLineItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert('Line item edited successfully');
        }else{
            alert(`Failed to edit line item, status code = ${response.status}`);
        }
        history.push('/AllLineItems');
    };

    let formAction = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={formAction}>
                <h1>Edit Line Item</h1>
                <div>
                    <label for='date'>Date:</label>
                    <input
                        type="date"
                        value = {date}
                        onChange={e => setDate(e.target.value)} />    
                </div>
                <div>
                    <label for='descripton'>Description</label>
                    <input 
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                <label for='category'>Category</label>
                    <select id="dropdown" onChange={e => setCategory(e.target.value)}>
                        <option value="Income">Income</option>
                        <option value="Assets">Assets</option>
                        <option value="Home">Home Expenses</option>
                        <option value="Entertainment">Entertainment Expenses</option>
                        <option value="Personal/Health">Personal/Health</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </div>
                <div>
                    <label for='amount'>Amount</label>
                        <input
                            type='number' min='0.01' step='0.01'
                            value={amount}
                            onChange={e => setAmount(e.target.value)}/>
                </div>
                <button onClick={editLineItem}>Save</button>
            </form>
        </div>
    )
}

export default EditLineItem