import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startDate} - {this.props.endDate}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <ul>
            {this.props.jobDescription}<br/>
            {this.props.jobDescription1}<br/>
            {this.props.jobDescription2}<br/>
            {this.props.jobDescription3}<br/>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
