import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import BlogPost from '../components/BlogPost';
import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png'

function BlogPostCard(props) {

    return(
        <>
        <a href={props.link}>
                <Card className="shadow-sm bg-white mb-5" style={{ width: '37em' , height: '25em'}} >
                    <Card.Img className="g-blog-image" variant="top" src={JavaBlogPostImg} alt="Blog post image" />
                    <Card.Body className="d-flex flex-column">
                        <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">{props.title}</Card.Title>
                        <Badge pill variant="light">{props.category}</Badge>
                        </div>
                        <Card.Text className="text-secondary mb-0">
                            {props.subTitle}
                        </Card.Text> 
                        {/* <Card.Text className="h-3">
                            {props.content}
                        </Card.Text>                        */}
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Posted date: 20 April 2020</small>
                    </Card.Footer>
                </Card>
            </a>
        </>
    );
}

export default BlogPostCard