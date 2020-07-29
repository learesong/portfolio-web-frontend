import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Badge, Card, CardDeck, Col, Container } from 'react-bootstrap';
import Axios from 'axios';

import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png';
    import BlogPost from '../components/BlogPost';
import BlogPostCard from '../components/BlogPostCard';

function BlogPage(props){

    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/blogs')
        .then(res => {
            setBlogPosts(res.data);
            // console.log(blogposts);
        })  
        .catch(err => {
          console.error(err);
        })
    })

    // useEffect(async() => {
    //     try {
    //         const res = await Axios.get('http://localhost:8080/blogs');
    //         setBlogPosts(res.data);
    //         console.log(blogposts);
    //     } catch(err) {
    //         console.error(err);
    //     }
    // })

    return(        

        <div>
            {/* <Router>
                {blogposts.map((blogpost) => 
                    <Route path={blogpost.link} exact render={(blogpost) => <BlogPost title={blogpost.title} subTitle={blogpost.subTitle} link={blogpost.link} category={blogpost.category} content={blogpost.content}/>}/>
                )}
            </Router> */}
            <Hero title={props.title} subTitle={props.subTitle}/>
            <div>
            <CardDeck className="d-flex flex-wrap justify-content-center p-5 mr-5 ml-5">
                 {blogposts.map(function(blogpost){
                return <div>
                        <BlogPostCard 
                            key = {blogpost.key}
                            image="JavaBlogPostImg"
                            title={blogpost.title} 
                            subTitle={blogpost.subTitle} 
                            link={blogpost.link}
                            category={blogpost.category} 
                            content={blogpost.content}/>
                    </div>
                 })
                 }
            </CardDeck>
            </div>
            
        </div>
    );

}
export default BlogPage;