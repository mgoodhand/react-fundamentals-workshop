import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PostOutput extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  }
  render() {
    return (
         <div>
           <span>Loaded post ID: {this.props.post.id}</span>
           <h1>{this.props.post.title}</h1>
           <p>{this.props.post.body}</p>
         </div>
    )
  }
}