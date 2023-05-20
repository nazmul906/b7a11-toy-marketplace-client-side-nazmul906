import React from "react";
import { useEffect, useState } from "react";
import AllToyCard from "../../Display/AllToyCard/AllToyCard";
import "./alltoys.css";
const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  }, []);

  // search will be implemnt by backend indexing in db
  const handleSearchByToyName = () => {
    console.log(search);
    fetch(`http://localhost:5000/searchbytoyname/${search}`, {})
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  };
  return (
    <div>
      <h4>All toys</h4>
      <div className="p-3 text-center">
        <input onChange={(event) => setSearch(event.target.value)} />
        <button onClick={handleSearchByToyName}>Search</button>
      </div>
      <div className="grid grid-cols-3">
        {" "}
        {alltoys.map((item) => (
          <AllToyCard key={item._id} alltoy={item}></AllToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
