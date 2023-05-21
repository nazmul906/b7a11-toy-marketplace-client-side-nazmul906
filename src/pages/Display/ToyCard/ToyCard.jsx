import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  console.log(toy);
  const { _id, description, name, sellerName, subcategory, price, pictureURL } =
    toy;
  // const { description, email, pictureURL } = toy;
  // {toy.description}
  //   {
  //     toy.map((item) => item.email);
  //   }
  //
  return (
    <div>
      {/* <h3> {description}</h3> */}
      {/* <img height="100px" width="150px" src={pictureURL}></img> */}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          {/* <img src={pictureURL} alt="pic" className="rounded-xl" /> */}
          <img height="100px" width="150px" src={pictureURL}></img>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          {/* <h2>{sellerName}</h2> */}
          {/* <p>
            {subcategory}
          </p> */}
          <p>$ {price}</p>
          <p>{description}</p>
          {user ? (
            <div className="card-actions">
              <Link to={`/viewdetails/${_id}`}>
                <button className="btn btn-primary">View Details button</button>
              </Link>
            </div>
          ) : (
            <div>alert("login first")</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
