import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Icon from '../components/Icon'


function Footer(props) {



    return(
        <footer className="mt-5 fixed-bottom" >
            <Container fluid={true}>
                {/* <Row className="border-top justify-content-between p3">
                    <Col className="p-0" md={3} sm={12}>
                        
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        
                    </Col>
                </Row> */}
                <Row className="bg-light d-flex">
                    <Col>
                        Copyright © Leare Song 2020
                    </Col>
                    <Col>
                        {props.icon.map((item) => <Icon link={item.link} icon={item.icon} key={item.icon} />)}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;