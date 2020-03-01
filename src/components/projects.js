import React, { Component } from 'react';   
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import react12 from '../img/react.png';
import python from '../img/python.png';
import js from '../img/js.jpg';
import php from '../img/php.jpg';
import java from '../img/java.jpg';
 
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* React 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+react12+') center / cover'}} >Portfolio</CardTitle>
            <CardText>
              This site! It's built entirely in React, using React MDL, React Router, being served cache-first via service workers.
              Hosted on AWS Amplify, CI pipeline integrated with Github repo.  
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/Portfolio" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* JS 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
          {/* JS 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Python 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+python+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* Python 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+python+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Python 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+java+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* Python 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+java+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          {/* Python 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+php+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* Python 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+php+') center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" rel="noopener noreferrer" target="_blank"><Button colored>CodePen</Button></a>
            <a href="http://cybergenik.com" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>PHP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
