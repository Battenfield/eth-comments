import React, { Component } from 'react';
import styled from 'styled-components';
// import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
// import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDoubleUp from 'react-icons/lib/fa/angle-double-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';



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
      vote : 0
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.points !== nextProps.points) {
      return true;
    }
    return false;
  }

  upvote(id) {
    if(this.state.vote === 0 || 'undefined') {
      this.setState({ vote: 1 }, this.props.onUpvote(id));
    }
  }

  downvote(id) {
    if(this.state.vote === 0 || 'undefined') {
      this.setState({ vote: -1 }, this.props.onDownvote(id));
    }
  }

  clearUpvote(id) {
    this.setState({ vote: 0 }, this.props.onDownvote(id));
  }

  clearDownvote(id) {
    this.setState({ vote: 0 }, this.props.onUpvote(id));
  }

  renderButtons() {
    const vote = this.state.vote;
    return (
      <VoteButtons>
        <UpVote>
        { vote >= 0 ? this.renderUpButtons() : <FaMinus size={10} />}
        </UpVote>
        <DownVote>
          { vote <= 0 ? this.renderDownButtons() : <FaPlus size={10} /> }
        </DownVote>
      </VoteButtons>
    );
  }

  renderUpButtons() {
    return (
      this.state.vote > 0 ?
      <FaAngleDoubleUp size={25} onClick={() => this.clearUpvote(this.props.id)}/> :
      <FaAngleUp size={25} onClick={() => this.upvote(this.props.id)}/>
    );
  }

  renderDownButtons() {
    return (
      this.state.vote < 0 ?
        <FaAngleDoubleDown size={25} onClick={() => this.clearDownvote(this.props.id)}/> :
        <FaAngleDown size={25} onClick={() => this.downvote(this.props.id)}/>
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