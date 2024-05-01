import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import InputSelect from './InputSelect';
import Button from '../Button';
import './style.css';

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Programação');

    const [newTeam, setNewTeam] = useState('');
    const [newColor, setNewColor] = useState('');
    
    const [timesDuplicados, setTimesDuplicados] = useState(false);

    const submitCollaborator = (e) => {
        e.preventDefault();
        props.addCollaborator({
            id: uuidv4(),
            name,
            position,
            image,
            team
        })
        setName('');
        setPosition('');
        setImage('');
        setTeam('Programação');
    }

    const submitTeam = (e) => {
        e.preventDefault();
        props.addTeam({
            id: uuidv4(),
            name: newTeam,
            color: newColor
        })
        setNewColor('');
        setNewTeam('');
        if(props.addTeam){
            console.log( props.addTeam)
            setTimesDuplicados(true);
        }
    }

    return(
        <section className='form-collaborator'>
            <form onSubmit={submitCollaborator}>
            <h3>Preencha os dados para criar o card do colaborador</h3>
                <Input
                    value={name}
                    setValue={setName}
                    type = {"text"}
                    required={true}
                    label="Nome *"
                    placeholder="Digite seu nome"
                />
                <Input
                    value={position}
                    setValue={setPosition}
                    type = {"text"}
                    required={true}
                    label="Cargo *" 
                    placeholder="Digite seu cargo"
                />
                <Input
                    value={image}
                    setValue={setImage}
                    type = {"text"}
                    label="Imagem"
                    placeholder="Informe o endereço de imagem"
                />
                <InputSelect
                    value={team}
                    setValue={setTeam}
                    type = {"text"}
                    label="Time *"
                    options={props.teams}
                />
                <Button>Criar Card</Button>
            </form>
            <form onSubmit={submitTeam}>
                <h3>Preencha os dados para criar um novo time</h3>
                <Input
                    value={newTeam}
                    setValue={setNewTeam}
                    type = {"text"}
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                />
                {timesDuplicados
                    ? <p>Nome Criado</p>
                    : <p>Nome Não Criado</p>
                }
                <Input
                    value={newColor}
                    setValue={setNewColor}
                    type = {"color"}
                    required={true}
                    label="Cor"
                />
                <Button>Criar Time</Button>
            </form>
        </section>
    )
}

export default Form;
