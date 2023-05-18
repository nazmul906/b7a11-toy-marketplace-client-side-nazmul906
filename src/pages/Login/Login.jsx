import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const handleClick = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const password = form.password.value;
    console.log(username, password);
    signIn(username, password)
      .then((result) => {
        const signedUser = result.user;
        console.log("sign In", signedUser);
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleLogin = result.user;
        console.log("google", googleLogin);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 py-6"
            onSubmit={handleClick}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md "
                name="name"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md "
                type="password"
                name="password"
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
          <button
            className="mt-2 btn btn-outline"
            type="submit"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle></FcGoogle>
            Google
          </button>
          <div className="flex items-center justify-center">
            {" "}
            <p>Dont you have an account?..plz register </p>
            <Link to="/register" className="btn btn-primary mt-4">
              <button>Regitser</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
