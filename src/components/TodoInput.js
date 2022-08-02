import React from 'react'

export default function TodoInput({ item, handleChange, handleSubmit, editItem }) {


    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white"
                            style={{
                                fontSize: "1.5rem",
                                borderRadius: "0px"
                            }}
                        >
                            <i class="fa-solid fa-book"></i>
                        </div>
                    </div>
                    <input
                        type="text"
                        className='form-control text-capitalize'
                        placeholder='add a todo item'
                        value={item}
                        onChange={handleChange} />
                </div>
                <button
                    type="submit"
                    className={
                        editItem ?
                            "btn btn-success w-100 mt-3" :
                            'btn btn-primary w-100 mt-3'}
                >
                    {editItem ? "Edit Item" : "Add Item"}
                </button>
            </form>
        </div>
    )
}
