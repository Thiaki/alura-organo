import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../src/styles/main.sass';

import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name:'Programação',
      color:'#57C278',
    },
    {
      id: uuidv4(),
      name:'Front-End',
      color:'#82CFFA',
    },
    {
      id: uuidv4(),
      name:'Data Science',
      color:'#A6D157',
    },
    {
      id: uuidv4(),
      name:'Devops',
      color:'#E06B69',
    },
    {
      id: uuidv4(),
      name:'UX e Design',
      color:'#DB6EBF',
    },
    {
      id: uuidv4(),
      name:'Mobile',
      color:'#FFBA05',
    },
    {
      id: uuidv4(),
      name:'Inovação e Gestão',
      color:'#FF8A29',
    }
  ]);

  const [collaborators, setCollaborators] = useState([]);

  // Collaboradores iniciais estão sendo pegos do arquivo db.json na pasta initialTeam 
  useEffect(() => {
    fetch('http://localhost:8080/initialTeam')
      .then(initialTeam => initialTeam.json())
      .then(collaborators => {
        setCollaborators(collaborators)
      })
  }, [])

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  const addTeam = (newTeam) => {
    setTeams([...teams, newTeam]);
  }

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const modifyColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id){
        team.color = color;
      }
      return team
    }))
  };

  const favoriteCard = (id) => {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id){
        collaborator.favorite = !collaborator.favorite;
      }
      return collaborator
    }))
  }

  return (
    <div className='header-banner'>
      <Banner image="././image/Header.png" alt="Banner Principal" />
      <Form teams={teams.map(team => team.name)} addCollaborator={addCollaborator} addTeam={addTeam} />
      <Team teams={teams} collaborators={collaborators} deleteCollaborator={deleteCollaborator} modifyColor={modifyColor} favoriteCard={favoriteCard} />
      <Footer />
    </div>
  )
}

export default App;
