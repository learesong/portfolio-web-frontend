import React from 'react';
import { Jumbotron, Container, Row, Col, Badge } from 'react-bootstrap';

function BlogPostContent(props) {
    return(
        <Container>
            <Row>
                <Col>
                    <p>{props.content}</p>
                </Col>
            </Row>
        </Container>
    );
}
export default BlogPostContent;