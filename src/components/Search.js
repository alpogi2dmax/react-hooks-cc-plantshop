import React, { useState } from "react";

function Search({onAddSearchPlant}) {

  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.target.value)
    onAddSearchPlant(e.target.value)
  }

  console.log(search)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
