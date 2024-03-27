
// import { useId, useState} from "react";
import css from "./SearchBox.module.css"

const SearchBox = () => {
  console.log("search");
// const SearchBox = () => {
//   const [inputValue, setInputValue] = useState("");
//   const id = useId();
//    const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };

  return (
    <div className={css.contact}>
      <label>Find contacts by name</label>
      <input type="text"/>
    </div>
  );
};

export default SearchBox;