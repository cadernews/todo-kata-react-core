import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from './TaskFilter'

function Footer({ todos, setTodos, setStatus }) {
  const clearCompletedTask = () => {
    setTodos([...todos].filter((t) => !t.completed))
  }
  const сountCompleted = todos.filter((t) => !t.completed).length
  return (
    <footer className="footer">
      <span className="todo-count">items left {сountCompleted}</span>
      <TaskFilter setStatus={setStatus} />
      <button className="clear-completed" onClick={clearCompletedTask}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  todos: [],
  setTodos: () => {},
  setStatus: () => {}
}

Footer.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setStatus: PropTypes.func
}

export default Footer
