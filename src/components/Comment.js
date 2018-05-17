import React, { Component } from 'react';
import styled from 'styled-components';
// import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
// import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDoubleUp from 'react-icons/lib/fa/angle-double-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';



const CommentWrapper = styled.div`
  display: flex;
  padding: 15px;
`;

const VoteButtons = styled.div`
`;

const CommentContent = styled.div`
  position: relative;
  text-align: left;
`;


const UpVote = styled.div`

`;

const DownVote = styled.div`

`;

const Header = styled.div`
  display: flex;
  padding-left: 5px;
  margin: 5px;
`;

const User = styled.div`
  flex-grow: 0;
  padding-left: 5px;
  color: DeepSkyBlue
`;

const Points = styled.div`
  flex-grow: 0;
  padding-left: 5px;
  color: DarkGray 
`;

const Text = styled.div`
  padding-left: 15px;
`;

const Time = styled.div`
  flex-grow: 0;
  padding-left: 10px;
  color: DarkGray;
`;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId : {}
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.points !== nextProps.points) {
      return true;
    }
    return false;
  }

  upvote(id) {
    const { onUpvote, onDownvote } = this.props;
    const updatedSlectedState = { ...this.state.selectedId }
    if(!updatedSlectedState[id]) {
      updatedSlectedState[id] = 1;
      this.setState({ selectedId: updatedSlectedState }, onUpvote(id));
    }
  }

  downvote(id) {
    const { onUpvote, onDownvote } = this.props;
    const updatedSlectedState = { ...this.state.selectedId };
    if(updatedSlectedState[id] === 0 || 'undefined') {
      updatedSlectedState[id] = -1;
      this.setState({ selectedId: updatedSlectedState }, onDownvote(id));
    } else if(updatedSlectedState[id] === 1){
      updatedSlectedState[id] = 0;
      this.setState({ selectedId: updatedSlectedState }, onDownvote(id));
    } 
  }

  clearUpvote(id) {
    const updatedSlectedState = { ...this.state.selectedId };
    updatedSlectedState[id] = 0;
    this.setState({ selectedId: updatedSlectedState }, this.props.onDownvote(id));
  }

  clearDownvote(id) {
    const updatedSlectedState = { ...this.state.selectedId };
    if(updatedSlectedState[id] === -1) {
      updatedSlectedState[id] = 0;
      this.setState({ selectedId: updatedSlectedState }, this.props.onUpvote(id));
    }
  }

  renderButtons() {
    const id = this.props.id;
    return (
      <VoteButtons>
        <UpVote>
          {this.state.selectedId[id] > 0 ? 
            <FaAngleDoubleUp size={25} onClick={() => this.clearUpvote(id)}/> :
            <FaAngleUp size={25} onClick={() => this.upvote(id)}/>
          }
        </UpVote>
        <DownVote>
          {this.state.selectedId[id] < 0 ?
            <FaAngleDoubleDown size={25} onClick={() => this.clearDownvote(id)}/> :
            <FaAngleDown size={25} onClick={() => this.downvote(id)}/>
          }
        </DownVote>
      </VoteButtons>
    );
  }

  renderContent() {
    const { points, timeSince, text, username } = this.props;
    return (
      <CommentContent>
        <Header>
          <User>{username}</User>
          <Points>{points} points</Points>
          <Time>{timeSince}</Time>
        </Header>
          <Text>{text}</Text>
      </CommentContent>
    );
  }

  render() {
    return (
      <CommentWrapper>
        { this.renderButtons() }
        { this.renderContent() }
      </CommentWrapper>
    );
  }
}
  
export default Comment;