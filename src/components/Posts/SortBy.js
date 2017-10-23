import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSortAction } from '../../actions'

class SortBy extends Component {

  onChangeSort = (e) => {
    this.props.changeSort(e.target.value)
  }

  render() {
    return(
      <fieldset className="fieldset">
      <legend> Sort By <i className="fi-filter"></i> </legend>
        <select
          onChange={this.onChangeSort}
          name="sort" 
          id="sort">
          <option value="HigestVoted">Higest Voted</option>
          <option value="LowestVoted">Lowest Voted</option>
          <option value="date">Date</option>
        </select>
      </fieldset>
    )
  }
}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (value) => dispatch(changeSortAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)
