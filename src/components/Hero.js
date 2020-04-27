import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron=fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center pt-5 pb-2">
                    <Col className="d-flex justify-content-center">
                        { [props.title && <h3 className="display-1 font-weight-light pb-0 mb-0">{props.title}</h3>] }
                        
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        { [props.subTitle && <h5 className="display-5 font-weight-light pt-0">{props.subTitle}</h5>] }
                    </Col> 
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;