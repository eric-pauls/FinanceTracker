import React from 'react';
import Category from './Category';

function CategoryTable ({categories, onEdit}) {
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
            {categories.map((category, i) => <Category lineItem={lineItem}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    )
}

export default CategoryTable