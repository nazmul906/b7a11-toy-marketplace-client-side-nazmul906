import React from "react";
import { useEffect, useState } from "react";
import AllToyCard from "../../Display/AllToyCard/AllToyCard";
import "./alltoys.css";
const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/alltoys",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  }, []);

  // search will be implemnt by backend indexing in db
  const handleSearchByToyName = () => {
    console.log(search);
    fetch(
      `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/searchbytoyname/${search}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  };
  return (
    <div>
      <div className="p-3 text-center">
        <input
          className="border border-blue-500"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearchByToyName}>Search</button>
      </div>
      <div className="grid grid-cols-3">
        {" "}
        {/* {alltoys.map((item) => (
          <AllToyCard key={item._id} alltoy={item}></AllToyCard>
        ))} */}
        <div>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>seller name</th>

                <th>Price</th>
                <th>Subcategory</th>
                <th>Available quantity</th>
                <th>Detail description</th>
              </tr>
            </thead>
            <tbody>
              {alltoys?.map((item, index) => (
                <tr>
                  {/* <td>
              
              <img src={pictureURL} alt="Shoes" className="rounded-xl" />
            </td> */}
                  <td>{item.name}</td>
                  <td>{item.sellerName}</td>
                  {/* <td>{email}</td> */}

                  <td>{item.price}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
