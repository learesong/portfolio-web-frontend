import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'

import NavBar from './NavBar'
import Hero from "./Hero"
import Footer from "./Footer"


export default (props) => {

    return(
        <>
        <div className="min-vh-90">
        <NavBar/>
            <Hero />
            {props.children}
        </div>
        <Footer />

        </>
    );
}
