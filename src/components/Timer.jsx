/* eslint-disable no-unused-vars */
import React from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'

import { getPadeTime } from './helper/getPadTime'
// import PropTypes from 'prop-types'

function Timer({ time, completed }) {
  const [timeLeft, setTimeLeft] = React.useState(time * 60)
  const [isRunning, setIsRunning] = React.useState(false)

  const minutes = getPadeTime(Math.floor(timeLeft / 60))
  const seconds = getPadeTime(timeLeft - minutes * 60)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      isRunning && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const pauseHandle = () => {
    setIsRunning(false)
  }

  const playHandle = () => {
    setIsRunning(true)
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

// Timer.propTypes = {}

export default Timer
