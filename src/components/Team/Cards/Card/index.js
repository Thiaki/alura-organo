import React from 'react';
import '../../../../styles/components/team.sass';
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegHeart, FaHeart  } from "react-icons/fa6";

const Card = ({collaborator, color, deleteCollaborator, favoriteCard}) => {
    return (
        <div className='card'>
            <div className='mainColor' style={{ background: `linear-gradient(to right, ${color}, ${color + '90'})` }}>
                <img src={collaborator.image} alt={collaborator.name} />
                <IoIosCloseCircle className='button-delete' onClick={() => deleteCollaborator(collaborator.id)} />
            </div>
            <div className='content'>
                <h2>{collaborator.name}</h2>  
                <p>{collaborator.position}</p>
                <div className='favorite'>
                    {collaborator.favorite ? <FaHeart className='button-favorite-s' onClick={() => favoriteCard(collaborator.id)} color='red' /> : <FaRegHeart className='button-favorite-n' onClick={() => favoriteCard(collaborator.id)} />}
                </div>   
            </div>
        </div>
    )
}

export default Card;
