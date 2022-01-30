import React from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";

export default function SearchForm() {



    return(
        <form >
            <h2>חיפוש שם</h2>

           <div>
               {/*<InputField type={'text'} name={'חפש'} />*/}
                <Button name={'חפש לפי משמעות'} />
                <Button name={'חיפוש שם'} />
                <Button name={'שם אקראי'} />
           </div>

        </form>
    )
}