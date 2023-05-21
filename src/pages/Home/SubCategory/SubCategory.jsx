import React from "react";
import "./subcategory.css";
import { useState, useEffect } from "react";
import ToyCard from "../../Display/ToyCard/ToyCard";
const SubCategory = () => {
  const [active, setActive] = useState("disneyprincess");
  const [toys, setToys] = useState([]);
  const handleClick = (categoryname) => {
    setActive(categoryname);
    console.log(active);
  };
  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/alltoys/${active}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [active]);
  return (
    <div>
      <h3>this is subcateogory</h3>
      <div className="shop-by-category">
        {/* <ul className="category-tabs">
          <li className="tab active" data-tab="princess">
            Disney Princess
          </li>
          <li className="tab" data-tab="frozen">
            Frozen Dolls
          </li>
          <li className="tab" data-tab="animation">
            Animation Characters
          </li>
        </ul> */}

        <div className="tab-content">
          <li
            className={`tab ${active === "princess" ? "active" : ""}`}
            data-tab="princess"
            onClick={() => handleClick("disneyprincess")}
          >
            Disney Princess
          </li>
          <li
            className={`tab ${active === "frozen" ? "active" : ""}`}
            data-tab="frozen"
            onClick={() => handleClick("frozendolls")}
          >
            Frozen Dolls
          </li>
          <li
            className={`tab ${active === "animation" ? "active" : ""}`}
            data-tab="animation"
            onClick={() => handleClick("animationcharacters")}
          >
            Animation Characters
          </li>
        </div>
      </div>

      <div>
        {toys.map((item) => (
          <ToyCard toy={item}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
