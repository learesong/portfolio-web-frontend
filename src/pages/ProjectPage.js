import React from 'react';

import Hero from '../components/Hero';

function ProjectPage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
        </div>
    );
}

export default ProjectPage;