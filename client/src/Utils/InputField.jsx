import React from "react";
import './InputField.css'


export default function InputField(type, name, placeholder, value, onChange,icon) {


    return(
        <div className='input-div'>
            {/*<label htmlFor={name}>{name} </label>*/}
            <p>חפש שם</p>
            <input className="input" name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}
