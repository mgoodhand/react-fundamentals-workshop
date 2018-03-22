import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MakeThingsBlue = props => {
  return <div style={{ color: 'blue' }}>{props.children}</div>
}

MakeThingsBlue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

const App = () => {
  // TODO: rewrite this function passing in the children prop explicitly
  return (
    <MakeThingsBlue>
      <p>Hello world</p>
      <p>Hello dog</p>
    </MakeThingsBlue>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
