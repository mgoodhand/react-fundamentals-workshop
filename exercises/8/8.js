import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// notice that Count has no idea who its parent is
const Count = props => {
  return <p>{props.label}: {props.count}</p>
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

Count.defaultProps = {
  label: 'Count'
}


class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.start,
    }
  }

  onButtonClickIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div>
        <Count label="Prev" count={this.state.count-1} />
        <Count count={this.state.count} />
        <Count label="Next" count={this.state.count+1} />
        <button onClick={this.onButtonClickIncrement.bind(this)}>
          Click to increment
        </button>
      </div>
    )
  }
}

const App = () => {
  return <Counter start={4}/>
}

ReactDOM.render(<App />, document.getElementById('react-root'))
