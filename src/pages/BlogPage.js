import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Axios from 'axios';

import Hero from '../components/Hero';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import JavaBlogPostImg from '../assets/images/java-oracle-icon.png'
import BlogPost from '../components/BlogPost'
import BlogPostCard from '../components/BlogPostCard';

function BlogPage(props){

    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/blogs')
        .then(res => {
            setBlogPosts(res.data);
            console.log(blogposts);
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
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Container> 
            <CardDeck className="justify-content-around mb-5">

            
                 {blogposts.map(function(blogpost){
                return <div>
                    <BlogPostCard 
                        image="JavaBlogPostImg"
                        title={blogpost.title} 
                        subTitle={blogpost.subTitle} 
                        link={blogpost.link}
                        category={blogpost.category} 
                        content={blogpost.content}/>
                    </div>
                 })
                 }
            

                {/* <Card className="g-blog-card">
                    <Card.Img className="g-blog-image" variant="top" src={ProjectImg} alt="Blog post image" />
                </Card>
                <Card className="g-blog-card">
                    <Card.Img className="g-blog-image"  variant="top" src={ProjectImg} alt="Blog post image" />
                </Card> */}
            </CardDeck>
            </Container>
        </div>
    );

}
export default BlogPage;