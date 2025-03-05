import React from "react";
import Logo from "../assets/logo.jpg";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-10"
    >
      <div className="custom-container flex md:flex-row flex-col gap-5 justify-between">
        {/* Logo Cont */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 md:w-30s w-full">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="rounded-full w-24" />
            <h3 className="font-bold text-sm leading-7">
              Legacy Finance <span className="text-button-light-color">Strategy: <br /></span>
              Your trusted path to secure and profitable investments.
            </h3>
          </div>
        </motion.div>

        {/* Service Cont */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 md:w-[22.7%] w-full">
          <h3 className="font-semibold text-2xl">Services</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            {["Home", "About Us", "Contact Us", "Features", "Blog"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }}>
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resource Cont */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 md:w-[22.7%] w-full">
          <h3 className="font-semibold text-2xl">Resources</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            {["Apps", "Developer", "Integration", "Pricing"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }}>
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Cont */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 md:w-[22.7%] w-full text-center md:items-start items-center md:justify-start justify-center">
          <h3 className="font-semibold text-2xl">Contact</h3>
          <ul className="flex flex-col gap-5 text-sm">
            <div className="flex gap-3 items-center">
              <FaEnvelope className="h-5 w-5" />
              <p>info@LFStrategies.com</p>
            </div>
            <div className="flex gap-3 md:items-start items-center md:justify-start justify-center">
              <FaPhoneAlt className="h-5 w-5" />
              <p>+658 4584584</p>
            </div>
            <div className="flex gap-5 items-center md:justify-start justify-center">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  className="border-2 border-white rounded-full p-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
