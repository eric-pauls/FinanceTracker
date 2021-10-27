import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md';
import TotalCategories from './TotalCategories';

function Category ({category, onDelete, onEdit}) {
    return (
        <tr>
            <td>{category.category}</td>
            <td><TotalCategories category={category}/></td>
            <td>{category.budget}</td>
            <td className="td"><MdEdit onClick={() => onEdit(category)}/></td>
            <td className="td"><MdDeleteForever onClick={() => onDelete(category._id)}/></td>
        </tr>
    )
}

export default Category