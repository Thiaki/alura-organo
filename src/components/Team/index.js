import React from 'react';
import './style.css';
import Cards from './Cards';

const Team = (props) => {

    return(
        <>
        {props.collaborators.length > 0 && (
            <section className='cards'>
                <h3>Minha Organização</h3>
                <hr />
                {props.teams.map((team) => {
                    return(
                        <Cards
                            key={team.name}
                            team={team}
                            collaborators={props.collaborators.filter(collaborator => collaborator.team === team.name)}
                        /> )}
                    )
                }
            </section>
        )}
        </>

    )
}

export default Team;
