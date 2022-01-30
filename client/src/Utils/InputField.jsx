import React from "react";

export default function InputField(type, name, placeholder, value, onChange,icon) {


    return(
        <div>
            <label htmlFor={name}>{name} {icon}</label>
            {/*<p>חפש שם</p>*/}
            <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}
