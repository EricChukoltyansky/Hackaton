import React from "react";
import {ButtonStyled} from "../Styles/Button.style";

export default function Button({ name,callback,icon,bg,color,disabled ,onMouseOver}) {



    return(
        <>
            <ButtonStyled >
                <button  onClick={callback} disabled={!!disabled} onMouseOver={onMouseOver}> {name}  <span>{icon}</span></button>
            </ButtonStyled>
        </>
    )
}