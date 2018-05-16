import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(root, subClass = false) {
    // const { id, points, createdAt, text, user, onUpvote, onDownvote } = root;
    if(root.comments) {
      return (
        <div>
          <Comment 
            subClass={subClass} 
            key={this.props.id} 
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
  
  export default Comments;