import React from "react";
import {ButtonStyled} from "../Styles/Button.style";

export default function Button({ name,callback,icon,className,disabled ,onMouseOver}) {



    return(
        <>
            <ButtonStyled>
                <button className={className} onClick={callback} disabled={!!disabled} onMouseOver={onMouseOver}> {name}  <span>{icon}</span></button>
            </ButtonStyled>
        </>
    )
}