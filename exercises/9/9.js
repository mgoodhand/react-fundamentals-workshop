import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Count extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
  }

  onButtonClick() {
    this.props.onIncrement()
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.onButtonClick.bind(this)}>Increment</button>
      </div>
    )
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count1: props.start,
      count2: props.start,
    }
  }

  incrementCount1() {
    this.setState(prevState => {
      return { count1: prevState.count1 + 1 }
    })
  }

  incrementCount2() {
    this.setState(prevState => {
      return { count2: prevState.count2 + 1 }
    })
  }

  render() {
    return (
      <div>
        <Count
          count={this.state.count1}
          onIncrement={this.incrementCount1.bind(this)}
        />
        <Count
          count={this.state.count2}
          onIncrement={this.incrementCount2.bind(this)}
        />
      </div>
    )
  }
}

const App = () => {
  return <Counter start={4}/>
}

ReactDOM.render(<App />, document.getElementById('react-root'))
