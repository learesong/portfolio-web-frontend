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
                    <Col md={9} sm={12}>
                        { [props.title && <h2 className="display-1 font-weight-bolder pb-0 mb-0">{props.title}</h2>] }
                        { [props.subTitle && <h3 className="display-5 font-weight-light pt-0">{props.subTitle}</h3>] }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;