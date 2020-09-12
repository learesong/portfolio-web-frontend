import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Badge, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import Axios from 'axios';

import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png';
    import BlogPost from '../components/BlogPost';
import BlogPostCard from '../components/BlogPostCard';
import useBlogClient from '../client/useBlogClient';

function BlogPage(props){

    const blogposts = useBlogClient()

    return(        

        <div>
            <Router>
                {blogposts.map((blogpost) => 
                    <Route 
                        path={blogpost.link} 
                        exact render={(blogpost) => 
                        <BlogPost 
                            title={blogpost.title} 
                            subTitle={blogpost.subTitle} 
                            link={blogpost.link} category={blogpost.category} 
                            content={blogpost.content}/>}
                        />
                )}
            </Router>
                        <div >
                            <Row>
                                <Col>
                                    <CardDeck className="d-flex flex-wrap justify-content-center">
                                        {blogposts.map(function(blogpost){
                                        return <div>
                                                
                                                    <BlogPostCard 
                                                        key = {blogpost.key}
                                                        image="JavaBlogPostImg"
                                                        title={blogpost.title} 
                                                        subTitle={blogpost.subTitle} 
                                                        link={blogpost.link}
                                                        category={blogpost.category} 
                                                        content={blogpost.content}
                                                    />
                                                
                                            </div>
                                        })
                                        }
                                    </CardDeck>
                                </Col>
                            </Row>
                        </div>
        </div>
    );

}
export default BlogPage;