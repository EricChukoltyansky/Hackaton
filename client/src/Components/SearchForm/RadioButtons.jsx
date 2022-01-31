import React from "react";
import './SearchForm'
import './RadioButtons.css'
import {motion} from "framer-motion";
import {radioButtonsVariants} from "../../Utils/animations/animations";

export default function RadioButtons({onChangeRadio}) {

    return (
       
    <motion.div  className='radio-buttons-div' onChange={onChangeRadio}
    variants={radioButtonsVariants}
                 initial='hidden'
                 animate='visible'
    >
        <input type="radio" value={[true,false]} name="gender" /> בן
        <input type="radio" value={[false,true]} name="gender" /> בת
        <input type="radio" value={[true,true]} name="gender" defaultChecked="true" /> יוניסקס
      </motion.div>
        
    )
}