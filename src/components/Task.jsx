import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BsCheck } from 'react-icons/bs'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import Timer from './Timer'

const Task = ({ todos, setTodos, todo, completed, description, time }) => {
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

  const checkedHandler = ({ target }) => {
    if (
      target.className === 'description' ||
      target.className === 'done' ||
      target.className === 'toggle'
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
          <Timer time={time} completed={completed} />
          <span className="created">
            {`created ${formatDistanceToNow(new Date(), {
              includeSeconds: true
            })} ago`}
          </span>
        </label>
        {isEditMode ? (
          <button className="icon icon-save" onClick={(e) => saveTodo(e)}>
            <BsCheck />
          </button>
        ) : (
          <button
            className="icon icon-edit"
            disabled={completed}
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
  created: '',
  time: 0
}

Task.defaultProps = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  todo: PropTypes.object,
  completed: PropTypes.bool,
  description: PropTypes.string,
  created: PropTypes.string,
  time: PropTypes.number
}

export default Task
