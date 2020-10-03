import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Icon} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import dude1 from '../img/dude1.png';
import resume from '../img/resume.pdf';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={dude1}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '5px'}}>Luciano Remes</h2>
            <a href={resume} target='_blank' style={{textDecoration: 'none'}}>
                <p style={{color: 'rgb(131, 63, 178)'}}>Official PDF Resume</p>
            </a>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am proactive about new technologies and enjoy learning
              new things. I love working with Go and Python, as well as
              web technologies and Data Analytics tools. But overall if 
              there's a better, faster way of doing something, that's my 
              favorite thing to learn.
            </p>
            <h4 style={{color: 'grey'}}>Contact</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Salt Lake City, Utah</p>
            <h5>Phone</h5>
            <p>(818) 731-4070</p>
            <h5>Email</h5>
            <p>cybergenik@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>

          <h2>Skills</h2>
                  <List horizontal style={{display: 'flex', color: 'white', flexDirection: 'row'}}>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> Python
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> Golang
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> JavaScript
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> Linux
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> C/C++
                      </ListItemContent>
                    </ListItem>
                  </List>
                    <hr />
                  <List horizontal style={{display: 'flex', color: 'white', flexDirection: 'row'}}>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Java
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Bash
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Docker
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Git
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        SaltStack
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        AWS
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Kubernetes
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        GitLab
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        Vim
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        VSCode
                      </ListItemContent>
                    </ListItem>
                  </List>
                <hr style={{borderTop: '3px solid #833fb2'}} />

            <h2>Experience</h2>

              <Experience
                startDate="June 2020"
                endDate="present"
                jobName="Software Engineer Intern - Blerp.com"
                jobDescription="● Developed Data Analytics platform using Python, matplot, pandas, numpy"
                jobDescription1="● Implemented Atlas Search in complex API, reducing lookup times by 15% average"
                jobDescription2="● Optimized ffmpeg server for better soundbite manipulation, reducing runtime per bite by 20%" 
              />

              <Experience
                startDate="March 2020"
                endDate="June 2020"
                jobName="IT & Data Science Intern - UHealth"
                jobDescription="● Developed platform agnostic applications on .Net framework with Xamarin"
                jobDescription1="● Built Data Modeling algorithm for effective patient care with Python"
                jobDescription2="● IT Project management and implementation for $500,000 budget"              
              />

              <Experience
                startDate="May 2019"
                endDate="March 2020"
                jobName="IT Operations Analyst - Basecamp Franchising"
                jobDescription="● Developed, QA tested, and deployed Production Printing Software built in vanilla Java, running as a service. Reduced printing related tickets by 31%"
                jobDescription1="● Automated CI/CD Pipeline using SaltStack, Bash, Python scripting, and optimized Docker enviornments"
                jobDescription2="● Implemented reactive Salt procedures to automate ticket resolution using reactive failback software on CentOS Production server"              
              />
            <hr style={{borderTop: '3px solid #833fb2'}} />
            
            <h2>Education</h2>
              <Education
              startYear={2020}
              endYear={2022}
              schoolName="University of Utah - Bachelors of Science in Computer Science"
              schoolDescription="● Lassonde 400 Entrepreneurship Recipient"
              schoolDescription1="● Ivory Homes Scholarship"
              schoolDescription2="● Member of HacktheU"
              />
              <Education
                startYear={2018}
                endYear={2020}
                schoolName="Salt Lake Community College - Associates of Science in Computer Science"
                schoolDescription="● Emphasis: Linux Systems Engineering"
                schoolDescription1="● Open Source club: coding and ethical hacking | Presidents List: 4.0 GPA "
                schoolDescription2="● National Society of Leadership and Success - Member" 
                schoolDescription3="● Phi Theta Kappa - Honor Society Member" 
              />
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
