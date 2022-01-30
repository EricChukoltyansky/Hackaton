import React,{useState} from "react";
import SearchForm from "../Components/SearchForm/SearchForm";

import Footer from "../Components/Footer/Footer";
import './Home.css'
import NavBar from "../Components/Navbar/Navbar";

export default function Home({setResults}) {


    

    return(

          <div className='homePage'>
            <NavBar />
            <div className="heading">
                 <h1>...Name After</h1>
            </div>
            <SearchForm setResults={setResults}/>
            <Footer />
        </div>
    )
}