import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext();
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { createUser };
  return (
    <div>
      <h5>AuthProvider</h5>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
