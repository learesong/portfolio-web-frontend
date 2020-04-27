import React from 'react';
import Carousel from '../components/Carousel'
import PageBanner from '../components/PageBanner';

function HomePage(props){
    return(
        <div>
            <PageBanner title={props.title} subTitle={props.subTitle}/>
            <Carousel />
        </div>
    );
}

export default HomePage;