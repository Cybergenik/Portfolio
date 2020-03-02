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
              <p>Luciano moved from California to Salt Lake City, Utah seeking a Bachelors in Computer
              Science from the University of Utah, however due to the out-of-state costs,
              this would prove to be challenging. He decided to attend SLCC to complete
              his generals while getting residency, however he found a community of 
              programmers and fellow Open Source enthusiasts and decided to stay to finish
              his Associates. He's finishing his Associates in May 2020 and has been accepted
              once more into the University of Utah to study Computer Science.
              As a life long Programmer, he booted Ubuntu at 14, taught himself Python 
              when he was 15 and has been creating apps and participating in the Open 
              Source community since then. He loves to take part in coding events like 
              Topcoder, LeetCode, and AdventOfCode. He wants to use Big Data, Machine 
              Learning, and AI to make tools and applications that will improve our 
              quality of life while addressing some of the biggest issues affecting our 
              society today like climate change.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
