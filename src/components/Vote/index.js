import React, { Component } from 'react'
import AddVote from './AddVote'
import RemoveVote from './RemoveVote'
import TotalVoteScore from './Score'

class Vote extends Component {
  render() {
    return(
      <span>
        <AddVote {...this.props} />
        <TotalVoteScore {...this.props} />        
        <RemoveVote {...this.props} />
      </span>
    )
  }
}

export default Vote
