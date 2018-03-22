import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './auth-context'

export default class UserActions extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    liked: false,
  }

  like = () => this.setState({ liked: true })

  render() {
    return (
      <div>
        {/* TODO: can you disable the button if the user has liked the post?*/}
        <AuthContext.Consumer>
          {signedIn => signedIn ?  (
            <button onClick={this.like} onClick={this.like}>
              ❤
            </button>
          ) : (<p>Sign in to like posts</p>)
          }
        </AuthContext.Consumer>
        {this.state.liked && <span>You've liked this post!</span>}
      </div>
    )
  }
}
