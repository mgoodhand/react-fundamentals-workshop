import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => {
  // TODO: pass through another prop to customise the greeting
  // rather than it always be hardcoded as Hello
  return <h1>{props.greeting || 'Hello'}, {props.name}</h1>
}

ReactDOM.render(
  // props are all just JavaScript, so you can pass through any data type - these aren't HTML attributes
  <div>
      <HelloWorld name="Mark" greeting="Hi"/>
      <HelloWorld name="Bob" />
  </div>,
  document.getElementById('react-root')
)
