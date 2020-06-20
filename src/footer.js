import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class Footer extends Component{
    render() {
      return (
        <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <footer class="mainfooter" role="contentinfo">
            <div class="footer-middle">
            <div class="container" >
                <div class="row" style={{justifyContent: 'center'}}>
                <div class="col-md-3 col-sm-1">
                    <div class="footer-pad">
                        <h4>Links</h4>
                        <ul class="list-unstyled">
                            <li><Link to="/aboutme">About me</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                    <div class="col-md-3">
                        <h4>Social</h4>
                        <ul class="social-network social-circle">
                        <li><a href="https://twitter.com/cybergenik" class="icoTwitter" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/luciano-remes-ab6630175/" class="icoLinkedin" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        </ul>				
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 copy">
                        <p class="text-center">&copy; This site is open source.  <a href="https://github.com/Cybergenik/Portfolio" target="_blank">Github</a>.</p>
                    </div>
                </div>


            </div>
            </div>
            </footer>
        </div>
        );
    }
}
export default Footer