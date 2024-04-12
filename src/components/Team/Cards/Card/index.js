import React from 'react';
import '../../style.css';

const Card = ({collaborator, mainColor}) => {
    return (
        <div className='card'>
            <div className='mainColor' style={{ backgroundColor: mainColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className='content'>
                <h2>{collaborator.name}</h2>
                <p>{collaborator.position}</p>
            </div>
        </div>
    )
}

export default Card;
