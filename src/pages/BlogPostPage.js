import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import BlogPost from '../components/BlogPost'

function BlogPostPage(props) {
    return(
            <BlogPost 
                title={props.title} 
                subTitle={props.subTitle} 
                category={props.category} 
                content={props.content}/>
    );
}
export default BlogPostPage;