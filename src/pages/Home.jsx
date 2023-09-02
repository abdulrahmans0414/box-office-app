import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = e => {
    setSearchStr(e.target.value);
  };

  const onSearch = async(e) => {
    e.preventDefault();

    const res=  await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    const body = await res.json()
    console.log(body);

    // https://api.tvmaze.com/search/shows?q=girls
  };



  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};

export default Home;
