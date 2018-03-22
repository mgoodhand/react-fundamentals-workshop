import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => {
  return (
    <h1>
      {props.greeting}, {props.name}, {props.age}, {props.colour}
    </h1>
  )
}

const bunchOfProps = {
  name: 'Mark',
  age: 39,
  colour: 'blue',
  greeting: 'Yo',
}

// the spread operator passes through all the object keys as prop
ReactDOM.render(
  <div>
  <HelloWorld
    name={bunchOfProps.name}
    age={bunchOfProps.age}
    colour={bunchOfProps.colour}
    greeting={bunchOfProps.greeting}
  />
  <HelloWorld {...bunchOfProps} />
  </div>,
  document.getElementById('react-root')
)
