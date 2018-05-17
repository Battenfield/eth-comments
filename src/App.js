import React, { Component } from 'react';
import styled from 'styled-components';
import Comments from './components/Comments';
import updatePoints from './utils/updatePoints';
import DATA from './demo_data/DATA';
import USERS from './demo_data/USERS';

const RootContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const RootHeader = styled.div`
  background-color: #222;
  height: 15px;
  padding: 20px;
  color: white;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this)
    this.state = {
      DATA: DATA,
      USERS: USERS
    }
  }
  //upvote methods that update state in root level
  //TODO: only once per user?
  onUpvote(id) {
    const updatedIncrement = this.state.DATA;
    updatePoints(updatedIncrement, id, 1);
    this.setState({ DATA: updatedIncrement });
  }

  onDownvote(id) {
    const updatedDecrement = this.state.DATA;
    updatePoints(updatedDecrement, id, -1)
    this.setState({ DATA: updatedDecrement });
  }

  render() {
    return (
      <RootContainer>
        <RootHeader>
          React Comments
        </RootHeader>
        <Comments data={this.state.DATA} users={this.state.USERS} onUpvote={this.onUpvote} onDownvote={this.onDownvote} />
      </RootContainer>
    );
  }
}

export default App;