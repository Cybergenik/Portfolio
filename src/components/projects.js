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
            <a href="https://github.com/Cybergenik/Portfolio.git" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* JS 1 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >AJAX search Database</CardTitle>
            <CardText>
              AJAX calling JSON object generated from backend PHP to search database and populating results live in table
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2470/tree/master/inclass3" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2470.herokuapp.com/inclass3/FamilyAndFriend.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
          {/* JS 2 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >Carousel</CardTitle>
            <CardText>
              JQuery library to implement Carousel of my favorite hobbies
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2470/tree/master/inclass4" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2470.herokuapp.com/inclass4/Carousel.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
          {/* JS 3 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >Full JQuery Site 0</CardTitle>
            <CardText>
              JQuery libraries for reactive event driven site, heavy DOM manipulation
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2470/tree/master/inclass5" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2470.herokuapp.com/inclass5/JQueryIntroduction.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
          {/* JS 4 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+js+') center / cover'}} >Full JQuery Site 1</CardTitle>
            <CardText>
              Full JQuery site with Login functionalities, Heavy DOM manipulation, and user auth.(under production)
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2470/tree/master/inclass6" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2470.herokuapp.com/inclass6/AnimateExclean.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Python 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+python+') center / cover'}} >Tetris Game</CardTitle>
            <CardText>
              Made with Python3 Arcade, Random, and PIL Matrix and Vector manipulation
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/Tetris-Game" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>

          {/* Python 2 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+python+') center / cover'}} >Advent of Code 2019</CardTitle>
            <CardText>
              Online Competition to solve increasingly harder code problems, algorithm implementation, memory limitations.(currently in the works)
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/Advent-of-Code-2019" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
          {/* Python 3 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+python+') center / cover'}} >Crypto Currency Bot</CardTitle>
            <CardText>
              This has been my main project recently, Using AlphaVantage API to get live crypto prices, then using TF Keras ML models to attempt to predict price patterns.(currently in private repo)
            </CardText>
            <CardActions border>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Java 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+java+') center / cover'}} >ATM-Algorithm</CardTitle>
            <CardText>
              Java Menu system, Algorithm implementation, simulates basic functionality of an ATM, Object-Oriented
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/ATM-Program" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
          {/* Java 2 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+java+') center / cover'}} >Friends List App</CardTitle>
            <CardText>
              Java, JDBC, MySQL, simulates basic functionality of a Friends List app
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/FriendsList" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
          {/* Java 3 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+java+') center / cover'}} >Guessing Game</CardTitle>
            <CardText>
              Simple Guessing Game, Java, Javax Swing
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/Guess_Game" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          {/* PHP 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+php+') center / cover'}} >Form Validation and Submission</CardTitle>
            <CardText>
              PHP generated form, and form validation for unfilled fields, GET & POST methods
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2440/tree/master/htdocs/music-database" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2440.herokuapp.com/music-database/products.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* PHP 2 ------------------------------------------------------------------------*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+php+') center / cover'}} >Table Generation based on DB</CardTitle>
            <CardText>
              Simple PHP application that generates a table
            </CardText>
            <CardActions border>
            <a href="https://github.com/Cybergenik/CS2440/tree/master/htdocs/music-database" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            <a href="https://lucianoremes2440.herokuapp.com/music-database/music.php" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
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

          <Grid className="projects-bg" style={{minWidth: '450', margin: 'auto', height: '850px'}}>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
