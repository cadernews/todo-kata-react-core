import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ todos, setTodos, todo, completed, description, created }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((t) => t.id !== todo.id))
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
          readOnly
        />
        <label className={completed ? 'done' : ''}>
          <span className="description">{description}</span>
          <span className="created">{`created ${created} ago`}</span>
        </label>

        <button className="icon icon-edit"></button>
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
