import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dude1 from '../img/dude1.png';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= {dude1}
              alt="avatar"
              className="avatar-img"
              />

            <div className="about-me">
              <h1>Luciano Remes</h1>
              <p>Luciano was born and raised in Burbank, California. His father was an 
              Engineer for American Airlines and showed him from a young age how to take 
              things apart and learn about them. This taught him an invaluable 
              lesson: <i>how to learn</i>. As a life long learner, he booted Ubuntu at 14, 
              taught himself Python when he was 15 and has been creating apps and participating 
              in the Open Source community since then. He loves to take part in coding events 
              like Topcoder, LeetCode, and AdventOfCode. He wants to build large scale web 
              applications and use Python & Machine Learning to create smart applications. 
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
