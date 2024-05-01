import React from 'react';
import '../../../styles/components/form.sass';

const Input = (props) => {

    const updateValue = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <br/>
            <input value={props.value} onChange={updateValue} required={props.required} placeholder={props.placeholder} type={props.type}/>
        </div>
    )
}

export default Input;
