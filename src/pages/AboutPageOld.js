import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Emoji from '../components/Emoji';
import ProfPic from '../assets/images/profile-pic.jpeg';


function AboutPage(props) {
    return (
        <div>
            {/* <Hero title={props.title} /> */}

            <div>
                <Row>
                    <Col>
                        <Image src={ProfPic} alt="profile picture" roundedCircle fluid/>
                    </Col>

                    <Col>
                    <Content>
                        <p>    
                            Hello, my name is <b>Leare</b> <Emoji label="waving had" symbol="👋🏻"/> <br /> 
                            I am a <b>Software Engineer</b> <Emoji label="developer" symbol="👩🏻‍💻"/> based in London with experience in <b>Java, SpringBoot, React, PostresQL, MongoDB</b>. <br/>
                        </p>
                        <h3>Work</h3>
                        <p> 
                            I currently work as part of the <b>Digital Engineering</b> team at <b>Cognizant</b>, a software consulting firm.
                            I worked with various clients within the financial industry
                            including a multi-national payments network <Emoji label="card" symbol="💳"/>, an investment banking arm of major retail bank <Emoji label="graph" symbol="📈"/> as 
                            well as a financial regulator within the UK <Emoji label="bank" symbol="🏦"/>.
                        </p>
                        <p>
                            During this time, I have worked with DevOps tools such as <b>Jenkins, GitLab-CI, Docker, Kubernetes
                            </b>and Cloud technologies such as <b>AWS, GCP</b> and <b>PCF</b>. I also worked with testing tools such as
                            <b>JUnit, Mockito, PACT, Bees with Machine Guns</b> and <b>JMeter</b>.
                            
                        </p>
                        <p>
                            I am an <b>Oracle Certified Associate</b> in Java SE8 and currently pursuing <b>Google Cloud Developer certificate</b> <Emoji label="cloud" symbol="☁️"/>. Other achievements include an amazon voucher I got from winning the python course competition by Code First Girls <Emoji label="celebrate" symbol="🥳"/>. 
                            Otherwise, I am constantly learning new things and I am currently pursuing interest in <a href="https://www.udemy.com/course/distributed-systems-cloud-computing-with-java/">distributed systems</a> and 
                            dev-ops tools such as <a href="https://www.udemy.com/course/docker-hands-on/">Docker</a> and <a>Kubernetes</a> through online courses <Emoji label="smile" symbol="😊"/>
                        </p>
                        <h3>Personal</h3>
                        <p>
                            One of things I care about is diversity  within the tech industry <Emoji label="diversity-emoji" symbol="💕🙋🏻‍🌍🏳️‍🌈✨"/> and I volunteer as a coach for <a href="https://codebar.io/">codebar</a> where 
                            I help students from underrepresented background  <Emoji label="hands-up" symbol="🙌🏻"/>. I used to attend codebar as a student and I am happy to be in a position where I can help students with my experience in Java and various other programming languages such as Ruby and Python <Emoji label="thankful" symbol="🙏🏻"/>.
                            I also work as an organiser for <a href="https://codebar.io/meetings/monthly-sept-2019">codebar monthlies</a> where I am currently helping to make the talks accessible for a wider audience via web through video recording <Emoji label="video-recording" symbol="📹"/>.
                        </p>
                        <p>
                            Otherwise, I like cycling, camping and skiing. I am a dog lover and try to be good to the enviornment whenever I can.
                        </p>
                        <h3>Fun Facts</h3>
                        <li>I finished London Triathlon in 2019</li>
                        <li>I survived the highest bungy jump in the world</li>
                        <li>I think cows are very cute and would like to have a cow as a pet one day</li>
                        <li>This website was written during the lockdown of 2020</li>
                    </Content>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutPage;