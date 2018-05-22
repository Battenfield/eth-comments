import React, { Component } from 'react';
import styled from 'styled-components';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDoubleUp from 'react-icons/lib/fa/angle-double-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

const VoteButtons = styled.div`
  background: WhiteSmoke;
`;

const UpVote = styled.div`
  padding: 1px;
  ${({ onlyUpvote }) => onlyUpvote && `
    margin-bottom: 25px;
  `} 
`;

const DownVote = styled.div`
  padding: 1px;
  ${({ onlyDownvote }) => onlyDownvote && `
    margin-top: 25px;
  `} 
`;

class CommentButtons extends Component {

  renderUpButtons() {
    return (
      this.props.vote > 0 ?
      <FaAngleDoubleUp size={25} onClick={() => this.props.resetVote()}/> :
      <FaAngleUp size={25} onClick={() => this.props.handleVote(1)}/>
    );
  }

  renderDownButtons() {
    return (
      this.props.vote < 0 ?
        <FaAngleDoubleDown size={25} onClick={() => this.props.resetVote()}/> :
        <FaAngleDown size={25} onClick={() => this.props.handleVote(-1)}/>
    );
  }

  // renders vote buttons and removes if opposite if already voted
  render() {
    const vote = this.props.vote;
    const onlyUpvote = vote > 0;
    const onlyDownvote = vote < 0;
    return (
      <VoteButtons>
        <UpVote onlyUpvote={onlyUpvote}>
          { vote >= 0 && this.renderUpButtons() }
        </UpVote>
        <DownVote onlyDownvote={onlyDownvote}>
          { vote <= 0 && this.renderDownButtons() }
        </DownVote>
      </VoteButtons>
    );
  }
}

export default CommentButtons;