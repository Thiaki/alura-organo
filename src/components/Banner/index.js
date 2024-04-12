import React from 'react';
import './style.css';

const Banner = (props) => {  
    return (
        <header className='banner'>
            <img src={props.image} alt={props.alt}/>
        </header>
    )
}

export default Banner;