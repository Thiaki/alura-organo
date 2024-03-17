import React from 'react';
import './style.css';

function Banner (props) {  
    return (
        <header className='banner'>
            <img src={props.image} alt={props.alt}/>
        </header>
    )
}

export default Banner;