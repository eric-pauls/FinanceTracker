import { MdDeleteForever, MdEdit } from "react-icons/md";

function Category({ category, onDelete, onEdit, sum }) {
  const { budget, _id } = category;

  return (
    <tr>
      <td>{category.category}</td>
      <td>{sum}</td>
      <td>{budget}</td>
      <td className="td">
        <MdEdit onClick={() => onEdit(category)} />
      </td>
      <td className="td">
        <MdDeleteForever onClick={() => onDelete(_id)} />
      </td>
    </tr>
  );
}

export default Category;
