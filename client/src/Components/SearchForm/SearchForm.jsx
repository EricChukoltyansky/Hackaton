import React, { useState } from "react";
import InputField from "../../Utils/InputField";
import Button from "../../Utils/Button";
import RadioButtons from "./RadioButtons";
import "./SearchForm.css";
import myApi from "../../Api/Api";
import { motion } from "framer-motion";
import { searchFormVariants } from "../../Utils/animations/animations";
import Suggested from "./Suggested";

export default function SearchForm({ setResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState([true, true]); // gender[0] = male, gender[1] = female
  const [userMessage, setUserMessage] = useState("");

  const searchByMeaning = async () => {
    try {
      if (searchTerm.length > 0) {
        setUserMessage("בתהליך חיפוש...");
        const genderMale = gender[0];
        const genderFemale = gender[1];
        console.log(searchTerm);

        const { data } = await myApi.get(
          `/v1/names?searchTerm=${searchTerm}&genderMale=${genderMale}&genderFemale=${genderFemale}`
        );

        if (data.length > 0) {
          setResults(data);
          setUserMessage("");
        } else {
          setUserMessage("אין תוצאות, נסו לשנות את מונח החיפוש");
        }
      }
    } catch (e) {
      setUserMessage(e.message);
    }
  };

  const searchByName = async () => {
    try {
      if (searchTerm.length > 0) {
        setUserMessage("בתהליך חיפוש...");
        const { data } = await myApi.get(`/v1/names/${searchTerm}`);
        if (data) {
          setResults([data]);
          setUserMessage("");
        } else {
          setUserMessage("אין תוצאות, נסו לשנות את מונח החיפוש");
        }
      }
    } catch (e) {
      setUserMessage(e.message);
    }
  };

  const getRandomName = async () => {
    try {
      setUserMessage("בתהליך חיפוש...");
      const { data } = await myApi.get(
        `/v1/names/random?genderMale=${gender[0]}&genderFemale=${gender[1]}`
      );
      setResults([data]);
      setSearchTerm("");
      setUserMessage("");
    } catch (e) {
      setUserMessage(e.message);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onChangeRadio = (e) => {
    console.log("test", e.target.value.split(","));
    setGender(e.target.value.split(","));
  };

  return (
    <>
      <motion.div
        className="search-div"
        variant={searchFormVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="search-options">
          <div className="inputsButtons">
            <div className="flex-center">
              <InputField
                type="text"
                name={"search-input"}
                placeholder={"הכניסו מילת חיפוש"}
                onChange={handleChange}
                value={searchTerm}
              />
              <RadioButtons onChangeRadio={onChangeRadio} />
            </div>
            <div className="buttons-div">
              <Button
                className={"search-button"}
                name={"חפש לפי משמעות"}
                callback={searchByMeaning}
              />
              <Button
                className={"search-button"}
                name={"חיפוש שם"}
                callback={searchByName}
              />
            </div>
          </div>
          <div className="random-div">
            <Button
              className={"search-button random-button"}
              name={"שם אקראי"}
              callback={getRandomName}
            />
          </div>
        </div>
        <div className="usermessage">{userMessage}</div>
        <Suggested
            setSearchTerm={setSearchTerm}
            searchByMeaning={searchByMeaning}
        />
      </motion.div>

    </>
  );
}
