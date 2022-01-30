import React from "react";
import './InputField.css'


export default function InputField({type, name, placeholder, value, onChange,icon}) {


    return(
        <div className='input-div'>
            <i className="search-icon fas fa-search"> </i>
            <input className="input" name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}
