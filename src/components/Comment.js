import React, { Component } from 'react';
import styled from 'styled-components';
import CommentButtons from './CommentButtons';
import CommentContent from './CommentContent';

const CommentWrapper = styled.div`
  display: flex;
  padding: 15px;
`;

class Comment extends Component {
  state = {vote : 0 };

  shouldComponentUpdate(nextProps, nextState) {
    //only rerenders if comments points change
    if (this.props.points !== nextProps.points) {
      return true;
    }
    return false;
  }

  handleVote = (value) => {
    const id = this.props.id;
    //casts vote by calling proper Root method to update data
    if(this.state.vote === 0 || 'undefined') {
      value > 0 ? 
        this.setState({ vote: value }, this.props.onUpvote(id)) :
        this.setState({ vote: value }, this.props.onDownvote(id))
    }
  }

  resetVote = () => {
    const id = this.props.id;
    //increment/decrements vote and calls proper Root method to update data
    this.state.vote > 0 ?
      this.setState({ vote: 0 }, this.props.onDownvote(id)) :
      this.setState({ vote: 0 }, this.props.onUpvote(id))
  }

  render() {
    const { points, timeSince, text, username, userAddress } = this.props;
    return (
      <CommentWrapper>
        <CommentButtons 
          handleVote={this.handleVote} 
          resetVote={this.resetVote} 
          vote={this.state.vote}/>
        <CommentContent 
          points={points}
          timeSince={timeSince}
          text={text}
          username={username}
          userAddress={userAddress}/>
      </CommentWrapper>
    );
  }
}
  
export default Comment;