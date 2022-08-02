import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuid } from "uuid"
import "./App.css"



function App() {

  const [items, setItems] = useState([])
  const [item, setItem] = useState('')
  const [id, setId] = useState(uuid)
  const [editItem, setEditItem] = useState(false)

  function handleChange(e) {
    setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id,
      item
    }
    // console.log(newItem);

    const updatedItems = [...items, newItem]

    setItems(updatedItems)
    setItem("")
    setId(uuid())
    setEditItem(false)

  }

  const clearList = () => {
    setItems([])
  }

  const handleDelete = (id) => {
    const filteredItems = items.filter(item => {
      return item.id !== id
    })

    setItems(filteredItems)
  }

  const handleEdit = (id) => {
    const filteredItems = items.filter(item => {
      return item.id !== id
    })
    const selectedItem = items.find(item => item.id === id)
    setItems(filteredItems)
    setItem(selectedItem.item)
    setEditItem(true)
    setId(id)

  }
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">my todo</h3>
            <TodoInput
              item={item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>



  );
}

export default App;
