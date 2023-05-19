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
  }, [url]);
  return (
    <div>
      <h4>{user.email}</h4>
      {mytoy.length}
    </div>
  );
};

export default MyToy;
