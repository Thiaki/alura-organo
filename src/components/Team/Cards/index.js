import React from 'react';
import '../style.css';
import Card from './Card';

const Cards = (props) =>{
    return (
       (props.collaborators.length > 0) && <section key={props.team.name} style={{ backgroundColor: props.team.secondaryColor }} className='team' >
            <h4>{props.team.name}</h4>
            <hr style={{ borderColor: props.team.mainColor }} />
            <div className='itens-card'>
                {props.collaborators.map((collaborator) => <Card key={collaborator.name} collaborator={collaborator} mainColor={props.team.mainColor} /> )}
            </div>
        </section>
    )
}

export default Cards;
