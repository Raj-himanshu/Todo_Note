import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ items, clearList, handleDelete, handleEdit }) {
    // console.log(items.length);
    return (
        <ul className="list-group my-3">
            <h3 className="text-capitalize text-center">todo list</h3>
            {items.map(item => {
                return <TodoItem
                    key={item.id}
                    title={item.item}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                />
            })}

            <button
                type='button'
                className={
                    items.length === 0 ?
                        'btn text-capitalize w-100  mt-5 btn-secondary' :
                        'btn text-capitalize w-100  mt-5 btn-danger'
                }

                onClick={clearList}
            >
                clear list
            </button>
        </ul>
    )
}
