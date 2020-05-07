import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faLinkedin, faGithub, faTwitter, faGitlab, faGit } from '@fortawesome/free-brands-svg-icons';

import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPageOld';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPostPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import BlogPostPage from './pages/BlogPostPage';
import Layout from "./components/Layout.js"
import NavLinks from "./data/NavLinks.js"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Leare Song',
      home: {
        title: 'Do Good + Do it Well',
        subTitle: 'Software Engineer'
      },
      about: {
        title: 'About Me'
      },
      blog: {
        title: 'Blog',
        subTitle: 'Space to share latest updates and thoughts',
        posts: [
          {title: "Lets talk about java", subTitle: "Codebar talk on java", link: "/blog/lets-talk-about-java", category:"Tech", date:"20 April 2020", content: "Java content"},
          {title: "Working from home", subTitle: "Tips on productivity",  link: "/blog/working-from-home", category:"Self-Development", date:"19 April 2020", content: "Working from home Content"}
        ]
      },
      project: {
        title: 'Projects',
        subTitle: 'View my past projectss'
      },
      contact: {
        title: 'Get in touch',
        subTitle: 'Contacts page',
      }
    }
  }

  render(){
    return (
      <Router>
        <Layout>
        <Container className="p-0" fluid={true}>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}></HomePage>} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}></AboutPage>} />
          <Route path="/blog" exact render={() => <BlogPage title={this.state.blog.title} subTitle={this.state.blog.subTitle}></BlogPage>} />
          <Route path="/projects" exact render={() => <ProjectPage title={this.state.project.title} subTitle={this.state.project.subTitle}></ProjectPage>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} icon={this.state.contact.icons}></ContactPage>} />
          {this.state.blog.posts.map((item) => 
            <Route path={item.link} exact render={() => <BlogPostPage title={item.title} subTitle={item.subTitle} category={item.category} content={item.content}></BlogPostPage>} />
          )}

        </Container>

       </Layout>
      </Router>
    );
  }
}

export default App;
