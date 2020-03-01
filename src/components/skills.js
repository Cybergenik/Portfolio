import React, { Component } from 'react';
import { Cell, ListItem, ListItemContent, Icon } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
        <Cell col={8}>
          <ListItem>
            <ListItemContent style={{display: 'flex'}}> <Icon style={{color: '#fff'}} name="Pets"/> {this.props.skill}</ListItemContent>
          </ListItem>
        </Cell>
    )
  }
}

export default Skills;
