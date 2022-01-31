import React from "react";
import './Footer.css'
import {motion} from "framer-motion";
import {footerVariants} from "../../Utils/animations/animations";


export default function  Footer() {

    return(
        <motion.footer
        variants={footerVariants}
        initial='hidden'
        animate='visible'
        >
            <h3> <span>&#169;</span>  2022</h3>
            <p>-------- ● -------- </p>
            <h2>Name After</h2>
        </motion.footer>
    )
}