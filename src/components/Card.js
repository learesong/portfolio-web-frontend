import React from 'react';

import CardInfo from '../components/CardInfo'

function Card(props) {
    return(
        <div className="d-inline-block g-card" onMouseOver={ (e) => props.hover(props.item)}>
            <a href={props.item.link}>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                { <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>  }
            </a>
        </div>
    );
}

export default Card;