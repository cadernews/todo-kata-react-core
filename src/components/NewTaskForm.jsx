/* eslint-disable no-unused-vars */
import React from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

const NewTaskForm = ({ inputValue, setInputValue, todos, setTodos }) => {
  const [inputTime, setInputTime] = React.useState('')

  const addTask = (inputValue) => {
    if (inputValue && inputValue.trim().length !== 0) {
      const newTask = {
        id: uuid(),
        description: inputValue,
        completed: false,
        time: inputTime
      }
      setTodos([newTask, ...todos])
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(inputValue)
      setInputValue('')
      setInputTime('')
    }
  }

  const inputValueHandle = (e) => {
    setInputValue(e.target.value)
  }

  const inputTimeHandle = (e) => {
    setInputTime(e.target.value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={inputValue}
        onChange={inputValueHandle}
        onKeyDown={handleKeyPress}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
      <input
        type="number"
        value={inputTime}
        onChange={inputTimeHandle}
        onKeyDown={handleKeyPress}
        className="new-todo"
        placeholder="time per task(min)"
      />
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
