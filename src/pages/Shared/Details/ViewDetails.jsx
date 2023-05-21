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
      {/* {detailsToy._id} */}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={pictureURL} alt="photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2>
            <span>Seller : </span>
            {sellerName}
          </h2>
          <p>
            <span>Subcategory: </span> {subcategory}{" "}
            <p>
              <span>Price: </span>$ {price}
            </p>
          </p>
          <p>
            <span>Rating: </span>
            {rating}
          </p>
          <p>
            <span>Quantity: </span>
            {quantity}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
