import { useState, useEffect } from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

import { getPadeTime } from './helper/getPadTime'

function Timer({ time, completed }) {
  const [timeLeft, setTimeLeft] = useState(time * 60)
  const [isRunning, setIsRunning] = useState(false)

  const minutes = getPadeTime(Math.floor(timeLeft / 60))
  const seconds = getPadeTime(timeLeft - minutes * 60)

  useEffect(() => {
    const intervalId = setInterval(() => {
      isRunning && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const pauseHandle = () => {
    if (!completed && timeLeft > 0) setIsRunning(false)
  }

  const playHandle = () => {
    if (!completed && timeLeft > 0) setIsRunning(true)
  }

  return (
    <div className="timer-block">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      {isRunning ? (
        <button className=" icon-pause">
          <BsPauseFill onClick={pauseHandle} />
        </button>
      ) : (
        <button className=" icon-play">
          <BsPlayFill onClick={playHandle} />
        </button>
      )}
    </div>
  )
}

Timer.defaultProps = {
  time: ''
}

Timer.propTypes = {
  time: PropTypes.string
}

export default Timer
