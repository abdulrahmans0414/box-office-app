import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/Searchform';

const Home = () => {
const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);


  const onSearch = async ({q, searchOptions})=> {
    

    try {
      
      setApiDataError(null);

      if(searchOptions === "shows"){
        const result = await searchForShows(q)
        setApiData(result);
      }else{
        const result = await searchForPeople(q)
        setApiData(result);
      }
      
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

    <SearchForm  onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
