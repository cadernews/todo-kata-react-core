import React, { useState, useEffect } from 'react'

import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import Footer from './Footer'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodo, setFilterTodo] = useState([])

  useEffect(() => {
    filterHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter((t) => t.completed))
        break
      case 'active':
        setFilterTodo(todos.filter((t) => !t.completed))
        break
      default:
        setFilterTodo(todos)
        break
    }
  }

  console.log('hi')

  return (
    <section className="todoapp">
      <NewTaskForm inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} />
      <section className="main">
        <TaskList todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
        <Footer todos={todos} setTodos={setTodos} setStatus={setStatus} />
      </section>
    </section>
  )
}

export default App
