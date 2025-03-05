import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <section className="py-20 flex justify-center items-center bg-works-bg">
      <div className="custom-container flex flex-col justify-center items-center">
        <div className="md:w-[40%] w-full">
          <div className="w-full bg-works-gradient rounded-t-lg p-10 bg-cover bg-center">
            <h2 className="text-3xl font-bold text-center text-white">Welcome to LFStrategies</h2>
          </div>
          <div className="w-full bg-subBlack rounded-b-lg p-10 shadow-button-light-color shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-normal">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="8+ Character"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-400">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="w-full px-6 py-3 text-sm text-button-light-color border-2 border-button-light-color rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none bg-subBlack"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 mt-4 text-white bg-button-light-color rounded-lg"
              >
                Register
              </button>
            </form>
            <p className="text-sm text-center text-gray-400 mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline text-button-light-color font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
