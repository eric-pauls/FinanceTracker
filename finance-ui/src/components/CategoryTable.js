import React from 'react';
import Category from './Category';

function CategoryTable ({categories, onDelete, onEdit}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total Amount</th>
                    <th>Expected Tearly Total</th>
                </tr>
            </thead>
            <tbody>
            {categories.map((category, i) => <Category category={category}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    )
}

export default CategoryTable