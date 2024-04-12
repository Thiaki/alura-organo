import React, {useState} from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import Button from '../Button';
import './style.css';

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Programação');
    
    const formSubmit = (e) => {
        e.preventDefault();
        props.newCollaborator({
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

    return(
        <section className='form-collaborator'>
            <h3>Preencha os dados para criar o card do colaborador</h3>
            <form onSubmit={formSubmit}>
                <InputText
                    value = {name}
                    setValue = {setName}
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <InputText
                    value = {position}
                    setValue = {setPosition}
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <InputText
                    value = {image}
                    setValue = {setImage}
                    label="Imagem"
                    placeholder="Informe o endereço de imagem"
                />
                <InputSelect
                    value = {team}
                    setValue = {setTeam}
                    label="Time"
                    options={props.teams}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;
