import React, { Component } from 'react';
import styled from 'styled-components';
import ethLogo from '../eth.png';
import Web3 from 'web3';
import ReactTooltip from 'react-tooltip'

const ContentWrapper = styled.div`
  position: relative;
  text-align: left;
  background: Snow;
  padding-right: 20px;
  border-radius: 5px;
`;

const TipButton = styled.div`
  margin-left: 5px;
`;

const Header = styled.div`
  display: flex;
  padding-left: 5px;
  margin: 5px;
`;

const User = styled.div`
  flex-grow: 0;
  padding-left: 5px;
  color: DeepSkyBlue;
`;

const Points = styled.div`
  flex-grow: 0;
  padding-left: 5px;
  color: DarkGray;
`;

const Text = styled.div`
  padding-left: 15px;
`;

const Time = styled.div`
  flex-grow: 0;
  padding-left: 10px;
  color: DarkGray;
`;

class CommentContent extends Component {

  renderTipButton() {
    const address = this.props.userAddress;
    return (
      <div>
        <img data-tip="Give Comment Gold (.001 ETH)" alt="tip in ETH" height="17px" width="17px" src={ethLogo} onClick={() => {this.sendTip(address)}}/>
        <ReactTooltip place="top" type="info" effect="solid"/>
      </div>
    );
  }

  async sendTip(address) {
    if(typeof window.web3 !== 'undefined') { 
      //setup web3 with provider
      const web3 = new Web3(window.web3.currentProvider);
      const account = await web3.eth.getAccounts();
      if(account.length) {
        //create tx for tip
        const tx = {
          to: address,
          from: account[0],
          value: web3.utils.toWei('.001', 'ether'),
        };
        //use provider to send tip tx 
        web3.eth.sendTransaction(tx, (err)=> {
          if(err) {
            console.log('rejected')
          }
        });
      } else {
        //provider is availiable yet user not logged into metamask, ideally this would be a warning
        console.log('please log into metamask');
      }
    }
  }

  render() {
    const { points, timeSince, text, username, userAddress } = this.props;
    //checks if provider is available for web3
    const providerReady = userAddress && window.web3;
    return (
      <ContentWrapper>
        <Header>
          <User>{username}</User>
          <TipButton>{ providerReady && this.renderTipButton()}</TipButton>
          <Points>{points} points</Points>
          <Time>{timeSince}</Time>
        </Header>
          <Text>{text}</Text>
      </ContentWrapper>
    );
  }
}

export default CommentContent;