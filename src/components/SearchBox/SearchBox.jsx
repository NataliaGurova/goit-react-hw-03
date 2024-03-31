
import css from "./SearchBox.module.css"

const SearchBox = ({value, onFilter}) => {

  return (
    <div className={css.contact}>
      <label>Find contacts by name</label>
      <input className={css.input} type="text" value={value} onChange={(e) => onFilter(e.target.value)}/>
    </div>
  );
};

export default SearchBox;