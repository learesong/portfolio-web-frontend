import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png'

import BlogPostCard from '../components/BlogPostCard';

function BlogPage(props){
    return(
        <div> 
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Container> 
            <CardDeck className="justify-content-around mb-5">

                <BlogPostCard/>
                <Card className="g-blog-card">
                    <Card.Img className="g-blog-image" variant="top" src={ProjectImg} alt="Blog post image" />
                </Card>
                <Card className="g-blog-card">
                    <Card.Img className="g-blog-image"  variant="top" src={ProjectImg} alt="Blog post image" />
                </Card>
            </CardDeck>
            </Container>
        </div>
    );
}

export default BlogPage;