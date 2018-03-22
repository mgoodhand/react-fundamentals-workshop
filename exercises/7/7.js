import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.start,
    }
  }

  static propTypes = {
      start: PropTypes.number
  }

  onButtonClickIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  onButtonClickDecrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  render() {
    return (
      <div>
        <p>current count: {this.state.count}</p>
        <button onClick={this.onButtonClickIncrement.bind(this)}>
          Click to increment
        </button>
        <button onClick={this.onButtonClickDecrement.bind(this)}>
          Click to decrement
        </button>
      </div>
    )
  }

}

const App = () => {
  return <Counter start={4}/>
}

ReactDOM.render(<App />, document.getElementById('react-root'))
