import PropTypes from 'prop-types'

const TaskFilter = ({ setStatus }) => {
  const statusHandler = ({ target }) => {
    setStatus(target.className)
  }
  return (
    <ul className="filters" onClick={statusHandler}>
      <li>
        <button className="all">All</button>
      </li>
      <li>
        <button className="active">Active</button>
      </li>
      <li>
        <button className="completed">Completed</button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  setStatus: () => {}
}

TaskFilter.propTypes = {
  setStatus: PropTypes.func
}
export default TaskFilter
