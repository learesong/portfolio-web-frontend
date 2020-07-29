import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

function Icon(props){
    library.add(props.icon)
    return(
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-dark px-2"><FontAwesomeIcon icon={props.icon}/></a> 
    );
}
export default Icon;
