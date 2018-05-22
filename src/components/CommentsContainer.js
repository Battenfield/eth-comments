import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment';
import moment from 'moment';


const CommentsContainer = styled.div`
  ${({ subClass }) => subClass && `
    margin-left: 28px;
    border-left: .5px solid grey;
    padding: 0 20px
    position: relative;
  `}
  user-select:none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

class Comments extends Component {

  renderComments(root, subClass = false) {
    const user = this.props.users.find((u) => u.id === root.user);
    const userAddress = user.address || null;
    const timeSince = moment(root.createdAt).fromNow();

    //renders recursive components based on the depth of sub-comments
    return (
      <CommentsContainer subClass={subClass} key={root.id}>
        <Comment
          username={user.username}
          userAddress={userAddress}
          onUpvote={this.props.onUpvote} 
          onDownvote={this.props.onDownvote}
          timeSince={timeSince}            
          {...root}/>
        {root.comments.map((c) => this.renderComments(c, true))}
      </CommentsContainer>
    );
  }

  render() {
    return (
      <div>
        { this.props.data.map((comment) => this.renderComments(comment))}
      </div>
    );
  }
}

Comments.propTypes = {
  data: PropTypes.array,
  users: PropTypes.array,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
};
  
export default Comments;