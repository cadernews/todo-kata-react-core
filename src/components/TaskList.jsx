import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

const TaskList = ({ todos, setTodos, filterTodo }) => {
  const todo = filterTodo.map((t) => {
    const { id, ...otherProps } = t
    return <Task {...otherProps} todos={todos} setTodos={setTodos} todo={t} key={id} />
  })
  return <ul className="todo-list">{todo}</ul>
}

TaskList.defaultProps = {
  todos: [],
  setTodos: () => {},
  filterTodo: () => {}
}

TaskList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  filterTodo: PropTypes.func
}

export default TaskList
