import React, { Component } from 'react';
import Typical from 'react-typical'
import { Col, Row, Container, Jumbotron } from 'react-bootstrap';
// import {useTransition, animated} from 'react-spring'

import Emoji from "./Emoji";

function PageBanner(props){
    return(
        <Jumbotron className="bg-transparent jumbotron=fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="d-flex justify-content-center">
                        {/* { [props.title && <h2 className="display-1 font-weight-bolder pb-0 mb-0 banner-title">{props.title}</h2>] } */}
                        {/* { [props.subTitle && <h3 className="display-5 font-weight-light pt-0">{props.subTitle}</h3>] } */}
                    </Col>    
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pb-4">
                        <Typical className="banner-sub-title" steps={[
                                 props.subTitle , 500, 
                                 'Codebar organiser', 500,
                                 'Dog Lover', 500,
                                 ]} loop={Infinity} wrapper="p" />
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    );
}





export default PageBanner;