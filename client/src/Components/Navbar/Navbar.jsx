import React from "react";
import './Navbar.css'
import {motion} from "framer-motion";
import {NavBarVariants} from "../../Utils/animations/animations";

export default function NavBar() {

 return (
     <motion.div className='navbar'
         variants={NavBarVariants}
         initial='hidden'
         animate='visible'
     >
         <div >
        <ul className='navbar-ul'>
            <li>

            </li>
            <li>
                • הבית
            </li>
            <li>
                • אודות
            </li>
            <li>
                • מועדפים
            </li>
            <div className="logo">
                <i className=""> Name After  </i>
            </div>
        </ul>
         </div>
     </motion.div>
 )
}