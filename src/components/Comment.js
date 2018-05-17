import React, { Component } from 'react';

class Comment extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.points !== nextProps.points) {
      return true;
    }
    return false;
  }

  renderButtons() {
    const { id, onUpvote, onDownvote } = this.props;
    return (
      <div>
        <button onClick={() => onUpvote(id)}>up</button>
        <button onClick={() => onDownvote(id)}>down</button>
      </div>
    );
  }

  renderContent() {
    //TODO: setup id/user name mapping to data source maybe in the level above and pass that down
    const { points, createdAt, text, user } = this.props;
    return (
      <div>
        <div style={{ display: "inline" }}>
          <div>username: {user}</div>
          <div>points: {points}</div>
          <div>time: {createdAt}</div>
        </div>
          <div>{text}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="comment" style={{ margin: "15px" }}>
        { this.renderButtons() }
        { this.renderContent() }
      </div>
    );
  }
}
  
export default Comment;