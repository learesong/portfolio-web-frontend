import React from 'react';
import { Jumbotron, Container, Row, Col, Badge } from 'react-bootstrap';

import BlogPostBanner from '../components/BlogPostBanner';
import BlogPostContent from '../components/BlogPostContent';
function BlogPost(props) {
    return(
        <div>
            <BlogPostBanner 
                title={props.title} 
                subTitle={props.subTitle} 
                category={props.category} 
                date={props.date} />

            <BlogPostContent content={props.content} />
        </div>
    );
}
export default BlogPost;