import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dude2 from '../img/dude2.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={dude2}
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Luciano Remes</h1>
              <h1>Student | Programmer | ML Enthusiast</h1> 
            <hr/>

          <p>HTML/CSS | JavaScript | React | Python | Java | SaltStack | Docker</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Cybergenik" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/cybergenik" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
