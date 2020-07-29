import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Card';
import ProfileImg from '../assets/images/profile-pic.jpeg';
import BlogImg from '../assets/images/paper-collection.jpeg';
import ProjectImg from '../assets/images/macbook-setup.jpeg';
import ContactImg from '../assets/images/hello-light-screen.png';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'About',
                    subTitle: 'Who I am',
                    imgSrc: ProfileImg,
                    link: '/about',
                    selected: false 
                },
                {
                    id: 1,
                    title: 'Blog',
                    subTitle: 'Thoughts and notes',
                    imgSrc: BlogImg,
                    link: '/blog',
                    selected: false 
                },
                {
                    id: 2,
                    title: 'Projects',
                    subTitle: 'Personal projects',
                    imgSrc: ProjectImg,
                    link: '/projects',
                    selected: false 
                },
                {
                    id: 3,
                    title: 'Contacts',
                    subTitle: 'Get in touch',
                    imgSrc: ContactImg,
                    link: '/contact',
                    selected: false 
                }  
            ]
        }
    }

    handleCardHover = (id) => {
        let items = [...this.state.items];

        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        
        this.setState(
            items
        )
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Col lg={3} md={6} sm={12}><Card item={item} hover={(e=> this.handleCardHover(item.id, e))} key={item.id} /></Col>
        })
    }

    render(){
        return(
            <div className="carousel-container">  
                <Container className="p-0">
                    <Row className="justify-content-around g-carousel">
                    {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Carousel;