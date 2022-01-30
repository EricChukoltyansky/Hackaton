import React from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";

export default function SearchForm() {

    return(
        <div>
            <h2>חפש שם</h2>

           <div>
                <Button name={'חפש לפי משמעות'} />
                <Button name={'חיפוש שם'} />
                <Button name={'שם אקראי'} />

           </div>
        </div>
    )
}