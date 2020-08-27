import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import AboutContent from '../components/AboutContent';
import AboutTabs from '../components/AboutTabs';
import Content from '../components/Content';
import Emoji from '../components/Emoji';
import ProfPic from '../assets/images/profile-pic.jpeg';


function AboutPage(props) {
    return (
        <div className="mb-5">
            {/* <Hero title={props.title} /> */}

            <div>
                <Row>
                    {/* <Col>
                        <Image src={ProfPic} alt="profile picture" roundedCircle fluid/>
                    </Col> */}

                    <Col>
                    
                    <Content>
                    
                        <div>
                            <p>    
                                Hello, my name is <b>Leare</b> <Emoji label="waving had" symbol="👋🏻"/> <br /> 
                                I am a <b>Software Engineer</b> <Emoji label="developer" symbol="👩🏻‍💻"/> based in London with experience in <b>Java, SpringBoot, React, PostresQL, MongoDB</b>. <br/>
                            </p>
                        </div>
                        <div className="mt-5">
                            <AboutTabs />
                            {/* <AboutContent /> */}
                        </div>
                        
                    </Content>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutPage;