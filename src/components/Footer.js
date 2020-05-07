import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faLinkedin, faGithub, faTwitter, faGitlab, faGit } from '@fortawesome/free-brands-svg-icons';
import Icon from '../components/Icon'
import IconsList from '../data/IconList.js'

function Footer(props) {

    return(
        <footer className="mt-5" >
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
                        {IconsList.map((item) => <Icon link={item.link} icon={item.icon} key={item.icon} />)}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;