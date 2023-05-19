import React from "react";
import "./toycard.css";
const AllToyCard = ({ alltoy }) => {
  console.log(alltoy);
  const { description, sellerName, subcategory, price, pictureURL } = alltoy;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={pictureURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{sellerName}</h2>
          <p>
            {subcategory} <p>$ {price}</p>
          </p>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToyCard;
