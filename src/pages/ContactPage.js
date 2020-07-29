import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import IconsList from '../data/IconList.js'
import Hero from '../components/Hero';
import Content from '../components/Content';
import Emoji from '../components/Emoji';
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'

// library.add(faLinkedin, faGithub, faTwitter)

function ContactPage(props) {

        return(
            <div>
                {/* <Hero md={8} title={props.title}/> */}
                <div>
                    <Row>
                        <Col>
                            <Content>
                                <p>
                                    If you want to reach out to me then you can send me an email. <br/>
                                    You can either send it directly to <a href="mailto:hello@learesong.com">hello@learesong.com</a> or 
                                    just use the form below <Emoji label="envelope" symbol="✉️"/> 
                                    <Emoji label="postbox" symbol="📮"/> <br/>

                                    {/* {IconsList.map((item) => 
                                        <Icon link={item.link} icon={item.icon} key={item.icon} />
                                    )} */}
                                </p>
                            </Content>
                        </Col>
                    </Row>
                </div>
                <ContactForm />
            </div>
        );
    }

export default ContactPage;