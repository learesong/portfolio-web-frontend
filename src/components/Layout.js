import React from 'react';

import NavBar from './NavBar'
import Hero from "./Hero"
import Footer from "./Footer"

export default (props) => {

    return(
        <>
        <NavBar/>
        <Hero />
       {props.children}
        <Footer />

        </>
    );
}
