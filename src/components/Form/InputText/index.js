import React from 'react';
import '../style.css';

const InputText = (props) => {

    const updateValue = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <br/>
            <input value={props.value} onChange={updateValue} required={props.required} placeholder={props.placeholder} type="text"/>
        </div>
    )
}

export default InputText;
