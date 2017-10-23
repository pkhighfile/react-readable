import React, { Component } from 'react'

import Up from './Up'
import Down from './Down'
import Score from './Score'

class Vote extends Component {
  render() {
    return(
      <span>
        <Up {...this.props} />
        <Score {...this.props} />        
        <Down {...this.props} />
      </span>
    )
  }
}

export default Vote
