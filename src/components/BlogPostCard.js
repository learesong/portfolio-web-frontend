import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png'

function BlogPostCard(state) {

    return(
        <a href="/blog/lets-talk-about-java">
                <Card lg={4} md={4} sm={12} className="shadow-sm bg-white g-blog-cardx" >
                    <Card.Img className="g-blog-image" variant="top" src={JavaBlogPostImg} alt="Blog post image" />
                    <Card.Body className="d-flex flex-column">
                        <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">Let's talk about Java</Card.Title>
                        <Badge pill variant="light">Technology</Badge>
                        </div>
                        <Card.Text className="text-secondary mb-0">
                            Codebar talk on java
                        </Card.Text>                        
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Posted date: 20 April 2020</small>
                    </Card.Footer>
                </Card>
            </a>
    );
}

export default BlogPostCard