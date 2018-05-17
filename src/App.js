import React, { Component } from 'react';
import './App.css';
import Comments from './components/Comments';
import updatePoints from './utils/updatePoints';
import DATA from './sample_data/DATA';
import USERS from './sample_data/USERS';

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
      <div className="App">
        <header className="App-header">
          React Comments
        </header>
        <Comments data={this.state.DATA} users={this.state.USERS} onUpvote={this.onUpvote} onDownvote={this.onDownvote} />
      </div>
    );
  }
}

export default App;
