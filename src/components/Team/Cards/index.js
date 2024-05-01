import React from 'react';
import '../../../styles/components/team.sass';
import Card from './Card';
import hexToRgba from 'hex-to-rgba';

const Cards = (props) => {
    return (
       (props.collaborators.length > 0) && <section key={props.team.name} style={{ background: `linear-gradient(to right, ${hexToRgba(props.team.color, '0.6')}, ${props.team.color + '50'})` }} className='team' >
            <input onChange={(e) => props.modifyColor(e.target.value, props.team.id)} value={props.team.color} type='color' className='color-input' />
            <h4>{props.team.name}</h4>
            <hr style={{ borderColor: props.team.color }} />
            <div className='itens-card'>
                {props.collaborators.map((collaborator) => {
                    return (
                        <Card key={collaborator.name} collaborator={collaborator} color={props.team.color} deleteCollaborator={props.deleteCollaborator} favoriteCard={props.favoriteCard} />
                    )
                })}
            </div>
        </section>
    )
}

export default Cards;
