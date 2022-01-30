import React from "react";


export default function Button({ name,callback,icon,className,disabled ,onMouseOver}) {
    return(
        <>
            <button className={className} onClick={callback} disabled={!!disabled} onMouseOver={onMouseOver}> {name}  <span>{icon}</span></button>
        </>
    )
}