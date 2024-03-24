// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {totalSeconds: 0, timerId: null}
  }

  displayTimer = () => {
    this.setState(old => ({
      totalSeconds: old.totalSeconds + 1,
    }))
  }

  startTimer = () => {
    const intervalId = setInterval(this.displayTimer, 1000)
    this.setState({timerId: intervalId})
  }

  stopTimer = () => {
    const {timerId} = this.state
    clearInterval(timerId)
  }

  resetTimer = () => {
    const {timerId} = this.state
    clearInterval(timerId)
    this.setState({totalSeconds: 0, timerId: null})
  }

  render() {
    const {totalSeconds} = this.state
    const minutes = parseInt(totalSeconds / 60)
    const seconds = totalSeconds % 60
    console.log(minutes, seconds)

    const displayMin = minutes > 9 ? minutes : `0${minutes}`
    const displaySec = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="bg">
        <div className="timer">
          <h1>Stopwatch</h1>
          <div className="timeIcon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Time</p>
          </div>
          <h1>
            {displayMin}:{displaySec}
          </h1>
          <div className="buttonsCont">
            <button onClick={this.startTimer} type="button" className="start">
              Start
            </button>
            <button type="button" className="stop" onClick={this.stopTimer}>
              Stop
            </button>
            <button type="button" className="reset" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
