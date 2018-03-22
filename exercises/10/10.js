import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Count extends Component {
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

Count.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counts: [0, 0, 0],
    }
  }

  incrementCount(countIndex) {
    this.setState(prevState => {
      const counts = [...prevState.counts]
      counts[countIndex] = prevState.counts[countIndex] + 1

      return { counts: counts }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.counts.map((count, index) => (
            <Count
              count={count}
              onIncrement={this.incrementCount.bind(this, index)}
              key={index}
            />
          ))
        }
      </div>
    )
  }
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
