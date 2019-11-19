import React from 'react';
import './ListItem.css';

const ListItem = ({
    name, image, description, twitterLink
}) => (
    <li className="listItem__wrapper">
        <img 
        alt={name}
        src={image} 
        className="listItem__image"/>
        <div>
        <h2 className="listItem__name">{name}</h2>
        <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button">visit twitter page</a>
        </div>
    </li>
)

export default ListItem;
