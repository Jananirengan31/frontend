import { useState } from "react";

const App = () => {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Search</h2>

        <input type="text" placeholder="Search" value={search} onChange={handleSearch}/>

        <h3>{search}</h3>
      </div>
    </>
  );
};

export default App;
