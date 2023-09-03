import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/Searchform';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);


  const onSearch = async ({q, searchOptions})=> {
    

    try {
      setApiDataError(null);

      let result;
      if(searchOptions === "shows"){
        result = await searchForShows(q)
      }else{
         result = await searchForPeople(q)  
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    
    if (apiData?.lenght === 0){
      return <div>No result </div>
    }

    if (apiData) {
      return apiData[0].show ? (
         <ShowGrid shows={apiData} />)
         : (
         <ActorsGrid actors={apiData}/> )
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
