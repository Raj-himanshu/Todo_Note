import React from 'react'

export default function TodoItem({ title, handleDelete, handleEdit }) {
    return (
        <li
            className="list-group-item text-capitalize
                d-flex justify-content-between my-2">
            <h5>{title}</h5>
            <div className="todo-icon">
                <span
                    className="mx-2 text-success"
                    onClick={handleEdit}>
                    <i className="fa-solid fa-pen"></i>
                </span>
                <span
                    className="mx-2 text-danger"
                    onClick={handleDelete}>
                    <i className="fa-solid fa-trash"></i>
                </span>
            </div>
        </li>
    )
}
