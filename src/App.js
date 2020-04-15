import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Leare Song',
      headerLinks: [
        {title: 'ABOUT', path: '/about'},
        {title: 'RESUME', path: '/resume'},
        {title: 'PROJECTS', path: '/projects'},
        {title: 'CONTACT', path: '/contact'}
      ],
      home: {
        title: 'Do Good + Do it Well',
        subTitle: 'Software Engineer'
      },
      about: {
        title: 'About Me'
      },
      resume: {
        title: 'Resume',
        subTitle: 'Resume'
      },
      project: {
        title: 'My Projects',
        subTitle: 'Project Page'
      },
      contact: {
        title: 'Get in touch',
        subTitle: 'Contacts page',
        icons: [
          {link:'https://www.linkedin.com/in/learesong/', icon: faLinkedin},
          {link:'https://github.com/learesong', icon: faGithub},
          {link:'https://twitter.com/LeareSong', icon: faTwitter},
        ]
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand href="/"> Leare Song</Navbar.Brand> 

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}></HomePage>} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}></AboutPage>} />
          <Route path="/resume" exact render={() => <ResumePage title={this.state.resume.title} subTitle={this.state.resume.subTitle}></ResumePage>} />
          <Route path="/projects" exact render={() => <ProjectPage title={this.state.project.title} subTitle={this.state.project.subTitle}></ProjectPage>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} icon={this.state.contact.icons}></ContactPage>} />
                
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
