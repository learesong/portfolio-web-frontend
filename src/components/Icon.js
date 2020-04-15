import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

function Icon(props){
    library.add(props.icon)
    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={props.icon}/></a> 
    );
}
export default Icon;
