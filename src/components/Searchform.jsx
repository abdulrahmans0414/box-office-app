import { useState } from "react";

const SearchForm =({onSearch})=>{
    const [searchStr, setSearchStr] = useState('');
    const [searchOptions, setSearchOptions] = useState('shows');
    
    const onSearchInputChange = e => {
        setSearchStr(e.target.value);
      };
    
      const onRadioChange = async e => {
        setSearchOptions(e.target.value);
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        
        const options ={
            q: searchStr,
            searchOptions
        }
        onSearch(options,);
      };

   return (
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOptions === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOptions === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit"> Search </button>
      </form>

)}

export default SearchForm;