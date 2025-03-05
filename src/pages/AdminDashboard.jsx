import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transactions, cards } from "../data/data";

const AdminDashboard = () => {
  return (
    <>
      <Navigation />
      {/* Dashboard Header */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="h-[50vh] bg-header-bg bg-cover bg-center flex items-center"
      >
        <div className="custom-container flex flex-col gap-3">
          <h1 className="text-6xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-1">
            <FaHome />
            <p>
              <Link to="/" className="text-button-light-color font-semibold">
                Home
              </Link>{" "}
              - Dasboard
            </p>
          </div>
        </div>
      </motion.section>
      {/* Main Dashboard */}
      <section className="py-20 bg-black">
        <div className="custom-container flex flex-col gap-20">
          {/* Cards */}
          <div className="flex flex-wrap justify-between gap-y-5">
            {cards.map((item, index) => {
              const IconComponent = item.fontAwesomeIcon; // Get the icon dynamically
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="md:w-30s w-full bg-button-light-color p-5 rounded-lg flex justify-between items-center"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p>{item.amount}</p>
                  </div>
                  <div className="bg-black h-full p-4 rounded-md">
                    <IconComponent className="text-button-light-color text-2xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Table for transaction */}
          <motion.table 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-lg shadow-button-light-color shadow-md overflow-x-auto"
          >
            <thead className="bg-button-light-color">
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-4 rounded-tl-lg">Date</th>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Wallet</th>
                <th className="px-6 py-4">Details</th>
                <th className="px-6 py-4 rounded-tr-lg">Post Balance</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction, index) => (
                <motion.tr 
                  key={index} 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm text-button-light-color">
                    {transaction.transactionId}
                  </td>
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm text-center">
                    <p className="bg-button-light-color text-xs rounded-md">
                      {transaction.wallet}
                    </p>
                  </td>
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm">
                    {transaction.details}
                  </td>
                  <td className="px-6 py-4 border-b-button-light-color border border-black text-sm">
                    {transaction.postBalance}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
