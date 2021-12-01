import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form'


const AddCategory = () => {
    const [category, setCategory] = useState('');
    const [budget, setBudget] = useState('');
    const history = useHistory();

    const cancel = () => {
        history.push('/BalanceSheet')
    }


    const addCategory = async () => {
        const newCategory = {category, budget};
        const response = await fetch('http://localhost:8080/categories', {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert('Category added successfully');
        }else{
            alert(`Failed to add category, status code = ${response.status}`);
        }
        history.push('/BalanceSheet');
    };

    let formAction = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={formAction}>
                <h1>Add Category</h1>
                <div>
                    <label for='category'>Category Name:</label>
                    <input
                        type="text"
                        value = {category}
                        onChange={e => setCategory(e.target.value)} />    
                </div>
                <div>
                    <label for='budget'>Budget:</label>
                    <input
                        type="number"
                        value = {budget}
                        onChange={e => setBudget(e.target.value)} />    
                </div>
                <button onClick={addCategory}>Add Category</button>
                <button onClick={cancel}>Cancel</button>
            </Form>
        </div>
    )
}

export default AddCategory