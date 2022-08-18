import React from 'react'
import { v4 as uuid } from 'uuid'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'

const NewTaskForm = ({ inputValue, setInputValue, todos, setTodos }) => {
  const dateCreated = formatDistanceToNow(new Date(Date.now()))

  const addTask = (inputValue) => {
    if (inputValue) {
      const newTask = {
        id: uuid(),
        description: inputValue,
        created: dateCreated,
        completed: false
      }
      setTodos([newTask, ...todos])
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(inputValue)
      setInputValue('')
    }
  }

  const inputValueHandle = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input value={inputValue} onChange={inputValueHandle} onKeyDown={handleKeyPress} className="new-todo" placeholder="What needs to be done?" autoFocus />
    </header>
  )
}

NewTaskForm.defaultProps = {
  inputValue: '',
  setInputValue: () => {},
  todos: [],
  setTodos: () => {}
}

NewTaskForm.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  todos: PropTypes.array,
  setTodos: PropTypes.func
}

export default NewTaskForm
