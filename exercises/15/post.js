import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

const cache = {}

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number,
  }

  state = {
    post: null,
  }

  componentDidMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps, prevState) {
    // remember to check if the ID prop has changed, so we don't
    // make network calls that are pointless
    if (prevProps.id !== this.props.id) {
      this.fetchPost()
    }
  }

  fetchPost() {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${
      this.props.id
    }`
    if (cache[this.props.id]) {
      this.setState( {
        post: cache[this.props.id]
      })
    }
    else {
      fetch(urlForPost).then(response => {
        cache[this.props.id] = response.data
        this.setState( {
              post: response.data 
          } 
        )
      })
    }
  }

  render() {
    const { post } = this.state
    return (
      <div>
        {post ? (
          <div>
            <span>Loaded post ID: {post.id}</span>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}
