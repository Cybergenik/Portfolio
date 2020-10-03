import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dude1 from '../img/campus_view.jpg';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="about-me">
              <h1>Luciano Remes</h1>
              <p>I was born and raised in Burbank, California. My dad was an 
              Engineer for American Airlines and showed me from a young age how to take 
              things apart and learn about them. This taught me an invaluable 
              lesson: <i>how to learn</i>. As a life long learner, I booted Ubuntu at 14, 
              taught myself Python when I was 15 and have been creating apps and participating 
              in the Open Source community since then. I love to take part in coding events 
              like AdventOfCode, hackthebox, and Google CodeJam. I want to build the next Linux, 
              I love anything that has to do with Operating Systems and Security. If it doesn't
              compile down to highly performant native code, I'm probably not too interested in it.
              Unless its Python! but even then, we have PyPy.
              </p>
            </div>
            <div className="about-me">
              <h2 style= {{color: 'white'}}>Editors I use:</h2>
              <p>
                - <b>Vim</b>: 80% of the time, cause Vim is best<br />
                - <b>VSCode</b>: 10% of the time for hot-reloading web stuff<br />
                - <b>IntelliJ</b>: 10% of the time, working with Java or sometimes C++
              </p>
              <h2 style= {{color: 'white'}}>Recommendations of the week:</h2>
              <p>
                  <b>gotop</b>: <br />
                    Open Source replacement to htop, made in Go of course, and <br />
                    it has a nicer more intuitive UI than htop. 
              </p>
              <h2 style= {{color: 'white'}}>University life:</h2>
              <p>
                  <b>View from dorm</b>: <br />
                    <img
                    src= {dude1}
                    alt="avatar"
                    className="avatar-img"
                    /><br />
                  <b>Projects</b>: <br />
                    working on a VPN right now in Go, will disclose more information once its more built out.
              </p>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
