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
    </div>
  );
};

export default ViewDetails;
