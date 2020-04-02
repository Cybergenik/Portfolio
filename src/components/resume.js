import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Icon} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import dude1 from '../img/dude1.png';

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
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Luciano is currently working in IT, however his passion is
              truely in Software Development. He is dedicated to show that 
              he is a quick learner and proactive about new technologies.
              His hobbies include programming and gaming, he loves to learn 
              new technology and implement that learning into projects.
            </p>
            <h4 style={{color: 'grey'}}>Contact</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Salt Lake City, UT 84106</p>
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
                        <Icon name='star'></Icon> JavaScript
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> HTML/CSS
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> Linux
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        <Icon name='star'></Icon> Java
                      </ListItemContent>
                    </ListItem>
                  </List>
                    <hr />
                  <List horizontal style={{display: 'flex', color: 'white', flexDirection: 'row'}}>
                    <ListItem>
                      <ListItemContent style={{color: 'white'}}>
                        React
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
                startDate="March 2020"
                endDate="current"
                jobName="IT & Data Science Intern"
                jobDescription="● Developed platform agnostic applications on .Net framework with Xamarin"
                jobDescription1="● Built Data Modeling algorithm for effective patient care with Python"
                jobDescription2="● IT Project management and implementation for $500,000 budget"              
              />

              <Experience
                startDate="Nov. 2019"
                endDate="March 2020"
                jobName="IT Operations Analyst"
                jobDescription="● Developed, QA tested, and deployed Production Printing Software built in vanilla Java, running as a service. Reduced printing related tickets by 31%"
                jobDescription1="● Automated CI/CD Pipeline using SaltStack, Bash, and Python scripting"
                jobDescription2="● Implemented reactive Salt procedures to automate ticket resolution using reactive failback software on CentOS Production server"              
              />
              <Experience
                startDate="May 2019"
                endDate="Nov. 2019"
                jobName="IT Specialist"
                jobDescription="● Solved Printing issues (software side), Docker container issues, resulting in a 23% ticket drop"
                jobDescription1="● Worked closely with SaltStack to automate deployment and configuration management"
                jobDescription2="● G Suit administration and managed corporate domain policies" 
              />
              {/* <Experience
                startDate="Sept. 2018"
                endDate="May 2019"
                jobName="Technical Analyst/Support"
                jobDescription="Beta testing, Quality Assurance, and wiki Documentation"
                jobDescription1="Worked closely with Docker environments to troubleshoot issues"
                jobDescription2="Worked in a Linux environment to troubleshoot server issues" 
                jobDescription3=" Built Test cases and scripts to test software" 
              /> */}
            <hr style={{borderTop: '3px solid #833fb2'}} />
            
            <h2>Education</h2>
              <Education
              startYear={2020}
              endYear={2022}
              schoolName="University of Utah - candidate Bachelors of Science in Computer Science"
              schoolDescription="● Starting as a Junior Fall 2020"
              schoolDescription1="● Lassonde 400 Entrepreneurship Recipient"
              />
              <Education
                startYear={2018}
                endYear={2020}
                schoolName="Salt Lake Community College - Associates of Science in Computer Science"
                schoolDescription="● Emphasis: Web Development & Linux Systems Engineering"
                schoolDescription1="● Open Source club: coding and ethical hacking | Dean's List: 3.76 GPA "
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
