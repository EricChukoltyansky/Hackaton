import React, {useState} from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";
import RadioButtons from "./RadioButtons";
import './SearchForm.css'
import names from "../../Api/mockData";


export default function SearchForm({setResults}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [gender,setGender] = useState([true,false]);

    const searchByMeaning = async () => {
        console.log("in search by meaning");
        //const data = fetch
        setResults(names);
        setSearchTerm("");
    }
    const searchByName = async () => {
        console.log("in search by name");
        // const data = fetch
        //setResults(data)
        setSearchTerm("");
    }

    const getRandomName = async () => {
        console.log("in get random name");
        // const data = fetch
        //setResults(data)
        setSearchTerm("");
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onChangeRadio =(e) => {
        console.log(e.target.value);
        setGender(e.target.value);
      }

    return(
        <div className='search-div'>
            <div className="search-title">
                <h2>חיפוש שם</h2>
            </div>
           <div className='search-options'>
               <div className='inputsButtons'>
                   <div className='flex-center'>
                        <InputField type='text' name={'search-input'} 
                        placeholder={"הכניסו מילת חיפוש"} 
                        onChange={handleChange} value={searchTerm}/>
                       <RadioButtons onChangeRadio={onChangeRadio}/>
                   </div>
                       <div className='flex-around'>
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


        </div>
    )
}