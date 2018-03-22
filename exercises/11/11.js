import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MakeThingsBlue = props => {
  return <div style={{ color: 'blue' }}>{props.children}</div>
}

// 'node' is "Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types"
// https://reactjs.org/docs/typechecking-with-proptypes.html
MakeThingsBlue.propTypes = {
  children: PropTypes.node
}

const App = () => {
  return (
    <MakeThingsBlue>
      <p>Hello world</p>
      <p>Hello dog</p>
    </MakeThingsBlue>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
