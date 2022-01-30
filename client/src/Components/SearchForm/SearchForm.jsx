import React, {useState} from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";
import RadioButtons from "./RadioButtons";
import './SearchForm.css'

export default function SearchForm() {
        const [searchInput,setSearchInput] =useState('')


    return(
        <div className='search-div'>
            <div className="search-title">
                <h2>חיפוש שם</h2>
            </div>
           <div className='search-options'>
               <div className='inputsButtons'>
                        <InputField type='text' name={'חפש'} />
                       <div className='flex-around'>
                        <Button className={'search-button'} name={'חפש לפי משמעות'} />
                        <Button className={'search-button'} name={'חיפוש שם'} />
                       </div>
               </div>
               <div className='random-div'>
                   <Button className={'search-button random-button'} name={'שם אקראי'} />
               </div>
           </div>
            <RadioButtons />
        </div>
    )
}