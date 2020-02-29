import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Luciano Remes</h1>
              <p>I live in Salt Lake City, Utah. Studying Computer Science
              , while working as an IT professional. I was 15 when I created
              my first Python program and ever since then I've fallen in love
              with the power of code. I want to use Big Data, Machine Learning,
              and AI to make our society better, while having the side effect
              of it being really cool!</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
