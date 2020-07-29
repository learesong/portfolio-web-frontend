import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faLinkedin, faGithub, faTwitter, faGitlab, faGit } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import useBlogClient from './client/useBlogClient';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPageOld';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Layout from "./components/Layout"
import NavLinks from "./data/NavLinks" 


function App (){

  const blogposts = useBlogClient()
  console.log(blogposts)
  const state = {
    title: 'leare.song',
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
  
    return (
      <>
      <Router>
        <Layout>
        <Container className="p-0" fluid={true}>
          <Route path="/" exact render={() => <HomePage title={state.home.title} subTitle={state.home.subTitle}></HomePage>} />
          <Route path="/about" exact render={() => <AboutPage title={state.about.title}></AboutPage>} />
          <Route exact path="/blog" exact render={() => <BlogPage title={state.blog.title} subTitle={state.blog.subTitle}></BlogPage>} />
          <Route path="/projects" exact render={() => <ProjectPage title={state.project.title} subTitle={state.project.subTitle}></ProjectPage>} />
          <Route path="/contact" exact render={() => <ContactPage title={state.contact.title} subTitle={state.contact.subTitle} icon={state.contact.icons}></ContactPage>} />
          {blogposts.map((item) => 
            <Route path={item.link} exact render={() => <BlogPost key= {item.id} title={item.title} subTitle={item.subTitle} category={item.category} link={item.link} content={item.content}></BlogPost>} />
          )}
        </Container>
       </Layout>
      </Router>
      </>
    );
}

export default App;
