import React,{useState} from "react";
import SearchForm from "../Components/SearchForm/SearchForm";
import './Home.css'
import NavBar from "../Components/Navbar/Navbar";
import {motion} from "framer-motion";
import  {titleVariants,searchFormVariants,NavBarVariants} from "../Utils/animations/animations";

export default function Home({setResults}) {


    return(

          <div className='homePage'>

                  <NavBar />


            <div className="heading">
                 <motion.h1
                 variants={titleVariants}
                 initial='hidden'
                 animate='visible'
                 >...Name After</motion.h1>
            </div>
              <motion.div className='search-animate-div flex-center'
              variants={searchFormVariants}
              initial='hidden'
              animate='visible'
              >
                  <SearchForm setResults={setResults}/>
              </motion.div>

        </div>
    )
}