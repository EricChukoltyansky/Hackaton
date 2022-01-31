import React, {useEffect, useState} from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";
import RadioButtons from "./RadioButtons";
import './SearchForm.css'
import names from "../../Api/mockData";
import myApi from '../../Api/Api';
import {motion} from "framer-motion";
import {searchFormVariants} from "../../Utils/animations/animations";


export default function SearchForm({setResults}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [gender,setGender] = useState([true,false]);




    const searchByMeaning = async () => {
        try {
            if(searchTerm.length>0) {
                const genderMale = gender[0];
                const genderFemale = gender[1];
                console.log(searchTerm)
                // const {data} = await myApi.get('https://nameafter.herokuapp.com/api/v1/names?searchTerm=%D7%94%D7%95%D7%A8%D7%94&genderMale=true&genderFemale=false')
                const {data} = await myApi.get(`https://nameafter.herokuapp.com/api/v1/names?searchTerm=${searchTerm}&genderMale=${genderMale}&genderFemale=${genderFemale}`)
                // setResults(names);
                // if(searchTerm.length===1)setResults([data])
                if(data) setResults(data);
            }
        } catch(e) {
            console.log(e.message);
        }
    }
    const searchByName = async () => {
        try {
            if(searchTerm.length>0) {
                const {data} = await myApi.get(`/v1/names/${searchTerm}`)
                if(data) {
                    setResults([data]);
                }
                // setSearchTerm("");
            }
        }catch(e) {
            console.log(e.message)
        }
    }

    const getRandomName = async () => {
        try {
        if(searchTerm.length>0) {
           const {data}= await myApi.get('http://localhost:5000/api/v1/names?genderMale=false&genderFemale=true')
                console.log("in get random name");
            // const data = fetch
            setResults([data])
            setSearchTerm("");
        }
        }catch(e) {

        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onChangeRadio =(e) => {
        // console.log('radio',e.target.value);
        console.log('test',e.target.value.split(','))
        setGender(e.target.value.split(','));
      }

    return(
        <motion.div className='search-div'
        variant={searchFormVariants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        >
            {/*<div className="search-title">*/}
            {/*    <h2>חיפוש שם</h2>*/}
            {/*</div>*/}
           <div className='search-options'>
               <div className='inputsButtons'>
                   <div className='flex-center'>
                        <InputField type='text' name={'search-input'} 
                        placeholder={"הכניסו מילת חיפוש"}
                        onChange={handleChange} value={searchTerm}/>
                       <RadioButtons onChangeRadio={onChangeRadio}/>
                   </div>
                       <div className='buttons-div'>
                        <Button className={'search-button'} name={'חפש לפי משמעות'} 
                        callback={searchByMeaning} />
                        <Button className={'search-button'} name={'חיפוש שם'} 
                        callback={searchByName}/>
                       </div>
               </div>
               <div className='random-div'>
                   <Button className={'search-button random-button'} name={'שם אקראי'} 
                   callback={getRandomName}/>
               </div>
           </div>


        </motion.div>
    )
}