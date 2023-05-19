import React from "react";
import { useEffect, useState } from "react";
import AllToyCard from "../../Display/AllToyCard/AllToyCard";
import "./alltoys.css";
const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
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
  return (
    <div>
      <h4>All toys</h4>
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
