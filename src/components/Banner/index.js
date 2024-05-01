import React from 'react';
import '../../styles/components/banner.sass';

const Banner = (props) => {  
    return (
        <header className='banner'>
            <img src={props.image} alt={props.alt}/>
        </header>
    )
}

export default Banner;