import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MyToy = () => {
  // we need to fetch toy based on logged user. so we need thier email
  const { user } = useContext(AuthContext);
  const [mytoy, setMytoy] = useState([]);
  const [order, setOrder] = useState("ascending");
  // const [toyupdate, setToyupdate] = useState(false);

  useEffect(() => {
    let url = `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/alltoy?email=${user?.email}`;
    if (order === "ascending" || order === "descending") {
      url += `&order=${order}`;
    }

    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        setMytoy(data);
      });
  }, [user, order]);

  const handleOrder = (text) => {
    setOrder(text);
  };
  const handleDelete = (id) => {
    console.log(id);
    fetch(
      `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/singletoy/${id}`,
      {
        method: "DELETE",
      }
    )
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
        <div>
          <button
            className="btn m-2 me-2"
            onClick={() => handleOrder("ascending")}
          >
            Ascending
          </button>
          <button className="btn" onClick={() => handleOrder("descending")}>
            descending
          </button>
        </div>

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
                <td>{item.pictureURL}</td>
                <td>{item.name}</td>
                <td>{item.sellerName}</td>
                <td>{item.email}</td>

                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>

                <td>
                  <Link to={`${item._id}`}>
                    <button className="btn btn-primary">update</button>
                  </Link>
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
