import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const UpdateToy = () => {
  const toy = useLoaderData();

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
  } = toy || [];
  console.log(toy);
  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    // const pictureURL = form.photo.value;
    // const name = form.name.value;
    // const sellername = form.name.value;

    // const email = form.email.value;
    // const subcategory = form.subcategory.value;
    const price = form.price.value;
    // const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // const toy={}
    //   pictureURL: pictureURL,
    //   name: name,
    //   sellerName: sellername,
    //   subcategory: subcategory,
    const updateToydata = {
      price: price,
      //   rating: rating,
      quantity: quantity,
      description: description,
      //   email: email,
    };
    console.log(updateToydata);

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToydata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update data successfully");
        }
        // if (data.insertedId) {
        //   alert("service update successfully");
        // }
      });
  };

  return (
    <div>
      <h4>Update coffe </h4>
      <form className="space-y-6" onSubmit={handleUpdateForm}>
        {/* <div>
          <label>photo</label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="photo"
            defaultValue={pictureURL}
            required
          />
        </div>
        <div className="block font-medium">
          <label>Toy Name</label>
          <input
            type="name"
            name="name"
            defaultValue={name}
            className="input input-bordered w-full"
          />
        </div>
        <div className="block font-medium">
          <label>Seller Name</label>
          <input
            type="name"
            name="sname"
            defaultValue={sellerName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="block font-medium">
          <label>email</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            className="input input-bordered w-full"
            required
          />
        </div> */}

        {/* <div>
          <label>Subcategory</label>
          <select
            name="subcategory"
            className="select select-bordered w-full"
            defaultValue={subcategory}
            required
          >
            <option value="">Select a sub-category</option>
            <option value="princess">Princess</option>
            <option value="frozendolls">Frozen Dolls</option>
            <option value="animation">Animation</option>
          </select>
        </div> */}
        <div>
          <label>Price</label>
          <input
            type="price"
            name="price"
            defaultValue={price}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* <div>
          <label>Rating</label>
          <input
            type="rating"
            name="rating"
            defaultValue={rating}
            className="input input-bordered w-full"
            required
          />
        </div> */}
        <div>
          <label>Available quantity</label>
          <input
            type="quantity"
            name="quantity"
            defaultValue={quantity}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label>Detail description</label>
          <input
            type="description"
            name="description"
            defaultValue={description}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
