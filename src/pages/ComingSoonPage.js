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

function ComingSoonPage(props){

    return(        
        <div className="min-vh-100">
            <Row>
                <Col className="d-flex justify-content-center">
                    <b><h1>Coming Soon !</h1></b>
                </Col>
            </Row>
        </div>
    );

}
export default ComingSoonPage;