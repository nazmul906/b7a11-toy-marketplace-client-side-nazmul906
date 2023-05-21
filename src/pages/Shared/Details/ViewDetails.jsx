import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const detailsToy = useLoaderData();

  const {
    _id,
    pictureURL,
    name,
    sellerName,
    subcategory,
    price,
    rating,
    quantity,
    description,
    email,
  } = detailsToy || [];
  console.log(detailsToy);
  return (
    <div>
      <h4>this is view details</h4>
      {detailsToy._id}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={pictureURL} alt="photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2>{sellerName}</h2>
          <p>
            {subcategory} <p>$ {price}</p>
          </p>
          <p>{rating}</p>
          <p>{quantity}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
