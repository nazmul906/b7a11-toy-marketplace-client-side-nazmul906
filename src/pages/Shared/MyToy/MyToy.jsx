import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState, useEffect } from "react";
const MyToy = () => {
  // we need to fetch toy based on logged user. so we need thier email
  const { user } = useContext(AuthContext);
  const [mytoy, setMytoy] = useState([]);
  const url = `http://localhost:5000/alltoy?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        setMytoy(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/singletoy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaintoys = mytoy.filter((item) => item._id !== id);
          setMytoy(remaintoys);
        }
      });
  };
  return (
    <div>
      {/* <h4>{user.email}</h4>
      {mytoy.length} */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>photo</th>
              <th>Name</th>
              <th>seller name</th>
              <th>seller email </th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available quantity</th>
              <th>Detail description</th>
            </tr>
          </thead>
          <tbody>
            {mytoy?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.pictureURL}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.sellerName}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.description}</td>

                <td>
                  <button className="btn btn-primary">update</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-primary"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
