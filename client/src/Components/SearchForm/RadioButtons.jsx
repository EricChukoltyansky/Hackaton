import React from "react";
import './SearchForm'

export default function RadioButtons({onChangeRadio}) {

    return (
       
    <div onChange={onChangeRadio}>
        <input type="radio" value={[true,false]} name="gender" /> בן
        <input type="radio" value={[false,true]} name="gender" /> בת
        <input type="radio" value={[true,true]} name="gender" defaultChecked="true" /> יוניסקס
      </div>
        
    )
}