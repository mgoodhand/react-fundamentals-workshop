import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

class Post extends Component {
  state = {
    post: null,
    userPostInput: '',
    error: false,
  }

  userInputChange = e => {
    this.setState({userPostInput: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.fetchPost(this.state.userPostInput)
  }

  fetchPost(id) {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${id}`

    fetch(urlForPost).then(response => {
      this.setState({ post: response.data })
    }).catch(error => {
      this.setState({error: true })
    })
  }

  clearInput = () => {
    this.setState({userPostInput: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search-form">
          <label>
            Please enter the ID of a post
            <input
              type="text"
              name="post-id"
              value={this.state.userPostInput}
              onChange={this.userInputChange}
            />
          </label>
          <button type="submit">Go</button>
          <button type="button" onClick={this.clearInput}>Clear</button>
        </form>
        <div>
          {this.state.post ? (
            <div>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
            </div>
          ) : this.state.error ? (
            <p>Error</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    )
  }
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
