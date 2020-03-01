import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import dude2 from '../img/dude2.png'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Luciano Remes</h2>
            <img
              src={dude2}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm available on most platforms, but I
              respond best to email. Feel free to reach out if you have a potential job offer or business inquiry.</p> 

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr style={{borderTop: '7px dotted #fff'}} />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (818) 731-4070
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                  <a href="https://twitter.com/cybergenik" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                    @cybergenik
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    cybergenik@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
