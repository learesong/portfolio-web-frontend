import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Badge } from 'react-bootstrap';
import Axios from 'axios';

import BlogPostBanner from './BlogPostBanner';
import BlogPostContent from './BlogPostContent';

function BlogPost(props) {

    return(
        <>
            <BlogPostBanner
                key = {props.key}
                title={props.title} 
                subTitle={props.subTitle} 
                link={props.link}
                category={props.category} 
                date={props.date} />
            <BlogPostContent key = {props.key} content={props.content}/>
        </>
    );
  }
export default BlogPost;