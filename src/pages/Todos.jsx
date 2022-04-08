import React, { useState, useEffect } from "react"
import TodoList from "../components/TodoList/TodoList"
import TodoForm from "../components/TodoForm/TodoForm"

import config from "../config"
import { create, getAllItems, getById } from "../api/apiServise"
import Message from "../components/UI/Message/Message"

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    getItems()
  }, [])
/**create new new task in db */
  const createNewTask = async (todo) => {
    const response = await create(`${config.url}/todos`, todo)
    if (response) {
      setMessage("Todo created successfully.")
      setError(false)
    } else {
      setMessage("Error: Todo not created.")
      setError(true)
    }
  }

  const addTask = (inputValue) => {
    const todo = {
      id: Date.now(),
      text: inputValue,
      complete: false,
      date: Date.now(),
    }
    setTodos((prevTodo) => {
      return [
        ...prevTodo,
        {...todo},
      ]
       
    })
    createNewTask(todo)
  }

  const handleToggle = (id) => {
    let completed = todos.map((todo) => {
      return todo.id === Number(id)
        ? { ...todos, complete: !todo.complete }
        : { ...todo }
    })
    setTodos(completed)
  }
  const handleDelete = (id) => {
    
  }
  const handleEdit = (id) => {

  }
  const getItem = async (id) =>{
    const res = await getById(`${config.url}/todos`, id);
    return res;
  }
  const getItems = async () => {
    const data = await getAllItems(`${config.url}/todos`);
    setTodos(data);
  }
  if (!error) {
    return (
      <div>
        {message ? <Message className='hide5sc' type>{message}</Message> : null}
        <TodoList todosData={todos} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}></TodoList>
        <TodoForm addTask={addTask} />
      </div>
    )
  } else {
    <div>
      {message ? <Message className='hide5sc'>{message}</Message> : null}
      <TodoList todosData={todos} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}></TodoList>
      <TodoForm addTask={addTask} />
    </div>
  }
}

export default Todos
