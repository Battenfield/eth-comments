import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }


  // renderButtons() {
  //   return (

  //   );
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.points !== nextProps.points) {
      return true;
    }
    return false;
  }

  renderContent() {
    //TODO: setup id/user name mapping to data source maybe in the level above and pass that down
    const { id, points, createdAt, text, user, onUpvote, onDownvote } = this.props;

    return (
      <div style={{ padding: "10px" }}>
        <div>
          <button onClick={() => onUpvote(id)}>up</button>
          <button onClick={() => onDownvote(id)}>down</button>
        </div>
        <div style={{ display: "inline" }}>
          <div>username: {user}</div>
          <div>points: {points}</div>
          <div>time: {createdAt}</div>
        </div>
          <div>{text}</div>
      </div>
    );
  }

  // renderContent() {
  //   return <div>{this.props.text}</div>
  // }


  render() {
    return (
      <div className="comment" style={{ margin: "15px" }}>
        {/* {this.renderButtons()} */}
        {this.renderContent()}
      </div>
    );
  }
}
  
  export default Comment;