import React from "react";

export default function InputField(type, name, placeholder, value, onChange) {


    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}
