import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BsCheck } from 'react-icons/bs'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = ({ todos, setTodos, todo, completed, description }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [value, setValue] = useState(description)
  const deleteHandler = () => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const saveTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, description: value }
        }
        return item
      })
    )
    setIsEditMode(false)
  }

  const checkedHandler = (e) => {
    if (
      e.target.className === 'description' ||
      e.target.className === 'toggle'
    ) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item
        })
      )
    }
  }
  return (
    <li onClick={(e) => checkedHandler(e)}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          disabled={isEditMode}
          readOnly
        />
        <label className={completed ? 'done' : ''}>
          {isEditMode ? (
            <input
              value={value}
              onChange={(evt) => {
                setValue(evt.target.value)
              }}
            />
          ) : (
            <span className="description">{description}</span>
          )}
          <span className="created">
            {formatDistanceToNow(new Date(), { includeSeconds: true })}
          </span>
        </label>
        {isEditMode ? (
          <button className="icon icon-save" onClick={(e) => saveTodo(e)}>
            <BsCheck />
          </button>
        ) : (
          <button
            className="icon icon-edit"
            onClick={() => setIsEditMode(true)}
          />
        )}
        <button className="icon icon-destroy" onClick={deleteHandler}></button>
      </div>
    </li>
  )
}

Task.defaultProps = {
  todos: [],
  setTodos: () => {},
  todo: {},
  completed: false,
  description: '',
  created: ''
}

Task.defaultProps = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  todo: PropTypes.object,
  completed: PropTypes.bool,
  description: PropTypes.string,
  created: PropTypes.string
}

export default Task
