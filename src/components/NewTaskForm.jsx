/* eslint-disable no-unused-vars */

import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'
import { useState } from 'react'

const NewTaskForm = ({ inputValue, setInputValue, todos, setTodos }) => {
  const [inputTime, setInputTime] = useState('')

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

  const inputValueHandle = ({ target }) => {
    setInputValue(target.value)
  }

  const inputTimeHandle = ({ target }) => {
    const time = Number(target.value)
    const reg = /^-?[0-9]\d*\.?\d*$/
    if (time === '' || reg.test(time)) {
      setInputTime(target.value)
    }
  }

  const onKeyPressHandle = (event) => {
    return event.charCode == 8 || event.charCode == 0 || event.charCode == 13
      ? null
      : event.charCode >= 48 && event.charCode <= 57
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
        type="text"
        pattern="[0-9]*"
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
