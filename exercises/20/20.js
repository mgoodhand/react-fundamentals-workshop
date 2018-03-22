import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import UserInput from './input'

const PostOutput = ({ post }) =>
  post ? (
    <div>
      <span>Loaded post ID: {post.id}</span>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ) : (
    <p>Loading</p>
  )

class PostSearch extends Component {
  state = {
    searchId: 1,
  }

  onSubmit = id => {
    this.setState({ searchId: id })
  }

  render() {
    return (
      <div>
        <UserInput onSearchInputChange={this.onSubmit} />
        <Post id={this.state.searchId}>
          {post => <PostOutput post={post} />}
        </Post>
        <Post
          id={this.state.searchId}
          render={post => <PostOutput post={post} />}
        />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
