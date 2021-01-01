import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px', fontSize:'22px'}}>{this.props.schoolName}</h4>
          <ul>
            {this.props.schoolDescription}<br/>
            {this.props.schoolDescription1}<br/>
            {this.props.schoolDescription2}<br/>
            {this.props.schoolDescription3}<br/>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
