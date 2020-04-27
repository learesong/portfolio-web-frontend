import React from 'react';
import { Jumbotron, Container, Row, Col, Badge } from 'react-bootstrap';

function BlogPostBanner(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron=fluid p-0">
            <Container fluid={true} className="bg-light">
                <Row className="justify-content-center pt-5 pb-0">
                    <Col className="d-flex justify-content-center">
                        { [props.title && <h5 className="display-4 font-weight-light pb-0 mb-0">{props.title}</h5>] }
                    </Col>
                </Row>
                <Row className="pb-0">
                    <Col className="d-flex justify-content-center pb-0">
                        { [props.subTitle && <p className="display-5 font-weight-light pt-0 pb-0">{props.subTitle}</p>] }
                    </Col> 
                </Row>
                <Row className="pt-0">
                    
                    <Col className="d-flex justify-content-center">
                        <Badge pill variant="dark">{props.category}</Badge>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col className="d-flex justify-content-center">
                        <small className="text-muted">{props.date}</small>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
  
    );
}
export default BlogPostBanner;