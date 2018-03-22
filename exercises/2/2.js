import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = () => {
  // JSX converted to JavaScript by the build system
  // 'className' still has to be used in place of 'class'
  return <h1 className="wibble"><i>Hello Blat</i></h1>
}

ReactDOM.render(<HelloWorld />, document.getElementById('react-root'))
