import React from 'react';
import {MdEdit} from 'react-icons/md';


function Category ({lineItem, onDelete, onEdit}) {
    return (
        <tr>
            <td>{lineItem.date}</td>
            <td>{lineItem.description}</td>
            <td>{lineItem.category}</td>
            <td>{lineItem.amount}</td>
            <td className="td"><MdEdit onClick={() => onEdit(lineItem)}/></td>
            <td className="td"><MdDeleteForever onClick={() => onDelete(lineItem._id)}/></td>
        </tr>
    )
}

export default Category