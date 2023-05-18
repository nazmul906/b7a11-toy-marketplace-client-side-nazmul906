import React from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(username, password);

    createUser(email, password)
      .then((result) => {
        const signeduser = result.user;
        console.log("registered", signeduser);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          class="bg-white shadow-md rounded px-8 py-6"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            {/* <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button> */}
            <input className="btn btn-primary" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
