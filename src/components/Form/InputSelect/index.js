import React from 'react';
import '../../../styles/components/form.sass';

const InputSelect = (props) => {

    const updateValue = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <br/>
            <select onChange={updateValue} value={props.value} name={props.label}>
                {props.options.map((item) => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default InputSelect;
