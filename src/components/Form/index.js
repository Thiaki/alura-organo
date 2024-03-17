import React from 'react';
import './style.css';

function Form() {
    return(
        <div className='formulario-colaborador'>
            <h3>Preencha os dados para criar o card do colaborador</h3>
            <form>
                <label>Nome</label>
                <button>Criar card</button>
            </form>
        </div>
    )
}

export default Form;
