import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  const teams = [
    {
      name:'Programação',
      mainColor:'#57C278',
      secondaryColor:'#00C86F26',
    },
    {
      name:'Front-End',
      mainColor:'#82CFFA',
      secondaryColor:'#E8FFFF',
    },
    {
      name:'Data Science',
      mainColor:'#A6D157',
      secondaryColor:'#E9FFE3',
    },
    {
      name:'Devops',
      mainColor:'#E06B69',
      secondaryColor:'#F1616526',
    },
    {
      name:'UX e Design',
      mainColor:'#DB6EBF',
      secondaryColor:'#DC6EBE26',
    },
    {
      name:'Mobile',
      mainColor:'#FFBA05',
      secondaryColor:'#FFBA0526',
    },
    {
      name:'Inovação e Gestão',
      mainColor:'#FF8A29',
      secondaryColor:'#FF8C2A26',
    }
  ];

  return (
    <div className='header-banner'>
      <Banner image="././image/Header.png" alt="Banner Principal" />
      <Form teams={teams.map(team => team.name)} addCollaborator={addCollaborator} />
      <Team teams={teams} collaborators={collaborators} />
      <Footer />
    </div>
  )
}

export default App;
