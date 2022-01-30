import React,{useState} from "react";
import SearchForm from "../Components/SearchForm/SearchForm";
import Button from "../Utils/Button";
import Footer from "../Components/Footer/Footer";
import './Home.css'

export default function Home() {

    return(
        <div className='homePage'>
            <h1>Home Page</h1>
            <SearchForm />
            <Button name={'test'} />
            <Footer />
        </div>
    )
}