import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = props => {
  return (
    <h1>
      Hello, {props.name}, {props.age}, {props.colour}
    </h1>
  )
}

// you can find more about proptypes here: https://reactjs.org/docs/typechecking-with-proptypes.html
// Typescript obviates the need for PropTypes.
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  colour: PropTypes.oneOf(['blue', 'red']).isRequired,
}

const bunchOfProps = {
  name: 'Jack',
  age: 25,
  colour: 'red',
}

ReactDOM.render(
  <HelloWorld {...bunchOfProps} />,
  document.getElementById('react-root')
)