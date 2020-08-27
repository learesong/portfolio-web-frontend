import React from 'react';
import { Tab, Nav, Col, Row, Container} from 'react-bootstrap';

import Hero from '../components/Hero';
import Projects from '../components/Projects';

function ProjectPage(props){
    return(
        <div>
            <Container>
                <Row>
                    {/* <Hero title={props.title} subTitle={props.subTitle}/> */}
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Projects/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProjectPage;