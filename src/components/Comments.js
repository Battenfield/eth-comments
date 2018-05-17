import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Comment from './Comment';

class Comments extends Component {

  renderComments(root, subClass = false) {
    if(root.comments) {
      return (
        <div key={root.id}>
          <Comment 
            subClass={subClass} 
            {...root} 
            onUpvote={this.props.onUpvote} 
            onDownvote={this.props.onDownvote}/>
          {root.comments.map((c) => this.renderComments(c, true))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="comments">
        { this.props.data.map((comment) => this.renderComments(comment))}
      </div>
    );
  }
}

Comments.propTypes = {
  DATA: PropTypes.array,
  USERS: PropTypes.array,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};
  
export default Comments;