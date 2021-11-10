import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


const EditCategory = ({categoryToEdit}) => {
    const [category, setCategory] = useState(categoryToEdit.category);
    const [budget, setBudget] = useState(categoryToEdit.budget);
    
    const history = useHistory();

    const editCategory = async () => {
        const editedCategory = {category, budget};
        const response = await fetch(`http://localhost:8080/categories/${categoryToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedCategory),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert('category edited successfully');
        }else{
            alert(`Failed to edit category, status code = ${response.status}`);
        }
        history.push('/BalanceSheet');
    };

    let formAction = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={formAction}>
                <h1>Edit Category</h1>
                <div>
                    <label for='category'>Category Name:</label>
                    <input
                        type="text"
                        value = {category}
                        onChange={e => setCategory(e.target.value)} />    
                </div>
                <div>
                    <label for='budget'>Budget</label>
                    <input 
                        type="number"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}/>
                </div>
                <button onClick={editCategory}>Save</button>
            </form>
        </div>
    )
}

export default EditCategory