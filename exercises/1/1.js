import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

// React components are just functions that return elements.
const HelloWorld = () => {
  // Attributes supplied in second parameter.
  // 'className' must be used instead of 'class'.
  return React.createElement('h1', { 
      className: 'foo',
      id: 'bar'
  }, 'Hello World')
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('react-root')
)
