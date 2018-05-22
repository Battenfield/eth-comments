import React, { Component } from 'react';
import styled from 'styled-components';
import CommentsContainer from './components/CommentsContainer';
import updatePoints from './utils/updatePoints';
import DATA from './demo_data/DATA';
import USERS from './demo_data/USERS';

const RootContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const RootHeader = styled.div`
  background-color: #222;
  height: 5px;
  padding: 10px;
  font-size: 20px
  color: white;
`;

const RootInfo = styled.div`
  background-color: #222;
  height: 10px;
  padding: 20px;
  font-size: 15px
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
          ETH Comments
        </RootHeader>
        <RootInfo> 
          (Log into MetaMask to tip commenter)
        </RootInfo>
        <CommentsContainer data={this.state.DATA} users={this.state.USERS} onUpvote={this.onUpvote} onDownvote={this.onDownvote} />
      </RootContainer>
    );
  }
}

export default App;