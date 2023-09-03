import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  const onSearchInputChange = e => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = async e => {
    setSearchOptions(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();

    try {
      
      setApiDataError(null);

      if(searchOptions === "shows"){
        const result = await searchForShows(searchStr)
        setApiData(result);
      }else{
        const result = await searchForPeople(searchStr)
        setApiData(result);
      }

      const result = await searchForShows(searchStr);

      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
       ? apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      )): apiData.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ))
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
