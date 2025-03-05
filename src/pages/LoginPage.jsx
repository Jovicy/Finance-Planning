import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="py-20 h-screen flex justify-center items-center bg-works-bg bg-cover">
      <div className="custom-container flex flex-col justify-center items-center">
        <div className="md:w-[40%] w-full">
          <div className="w-full bg-works-gradient rounded-t-lg p-10 bg-cover bg-center text-center">
            <h2 className="text-3xl font-bold text-center text-white">
              Welcome back
            </h2>
            <p>The world of investing is already waiting.</p>
          </div>
          <div className="w-full bg-subBlack rounded-b-lg p-10 shadow-button-light-color shadow-lg">
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal">Email Adress</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Email Address"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm font-normal">
                  <label>Password</label>
                  <Link to="/forget-password" className="text-button-light-color font-semibold">Forgot Password?</Link>
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Password"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 mt-4 text-white bg-button-light-color rounded-lg"
              >
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-400 mt-5">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="hover:underline text-button-light-color font-bold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
