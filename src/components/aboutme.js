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

            <div className="banner-text">
              <h1>Luciano Remes</h1>
              <p>Luciano lives in Salt Lake City, Utah. Studying Computer Science.
              As life long Programmer, he booted Ubuntu at 14, taught himself Python 
              when he was 15 and has been creating apps and participating in the open 
              source community since then. He loves to take part incoding events like 
              Topcoder, LeetCode, and AdventOfCode. He wants to use big data, machine 
              learning, and AI to make tools and applications that will improve our 
              quality of life and address some of the biggest issues affecting our 
              society today like climate change and poverty.. I was 15 when I created 
              my first Python program and ever since then I've fallen in love with the 
              power of code. I want to use Big Data, Machine Learning, and AI to make our 
              society better, while having the side effect of it being really cool!</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
