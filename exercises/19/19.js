import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import PostOutput from './post-output'
import UserInput from './input'

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
        <Post id={this.state.searchId} render={ post =>
          <div>
          {post ? (
              <PostOutput id={post.id} title={post.title} body={post.body}/>
          ) : (
            <p>Loading...</p>
          )}
          </div> 
        }
        />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
