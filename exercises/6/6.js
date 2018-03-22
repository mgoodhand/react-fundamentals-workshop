import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

// Components are cheap; create them aggressively
const AskQuestion = props => {
  return <p>{props.question}?</p>
}

AskQuestion.propTypes = {
  question: PropTypes.string.isRequired
}

const HelloWorld = props => {
  // React components must start with a capital letter to distinguish them from normal HTML elements.
  return (
    <div>
      <h1>
        {props.greeting}, {props.name}
      </h1>
      <AskQuestion question="How is your day going"/>
    </div>
  )
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.oneOf(['Hello', 'Hi']).isRequired,
}

const App = () => {
  return <HelloWorld greeting="Hello" name="Mark" />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
