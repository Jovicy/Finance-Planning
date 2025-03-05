import {
  FaHeadphones,
  FaEnvelope,
  FaRegUser,
  FaGlobe,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-5 bg-transparent border-b border-button-light-color text-white"
      >
        <div className="custom-container flex justify-between items-center md:flex-row flex-col md:gap-0 gap-3">
          <div className="flex md:gap-7 gap-2 items-center md:flex-row flex-col-reverse">
            <div className="flex items-center gap-2">
              <FaHeadphones />
              <p className="font-semibold">Support</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p className="font-semibold">info@legacyfinancestrategies.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="https://www.facebook.com/share/g/18MWHQU6ki/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-white hover:text-button-light-color h-6 w-6" />
            </a>
            <a href="https://wa.me/13392211218" target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare className="text-white hover:text-button-light-color h-6 w-6" />
            </a>
            <a href="mailto:legacyfinancialstrategy@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-white hover:text-button-light-color h-6 w-6" />
            </a>
            <a href="#">
              <FaInstagramSquare className="text-white hover:text-button-light-color h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-2 bg-white/20 backdrop-blur-md"
      >
        <div className="custom-container flex items-center justify-between">
          {/* Logo */}
          <div className="w-20">
            <img src={Logo} alt="logo" className="rounded-full border-2 border-button-light-color" />
          </div>

          {/* Nav list */}
          <ul className={`lg:flex hidden items-center gap-5`}>
            <li><Link to="/" className="font-semibold hover:text-button-light-color">Home</Link></li>
            <li><Link to="/payment" className="font-semibold hover:text-button-light-color">Payment</Link></li>
            <li><Link to="/about" className="font-semibold hover:text-button-light-color">About Us</Link></li>
            <li><Link to="/blog" className="font-semibold hover:text-button-light-color">Blog</Link></li>
            <li><Link to="/contact" className="font-semibold hover:text-button-light-color">Contact Us</Link></li>
          </ul>

          {/* Menu Button for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* nav-btn */}
          <div className="hidden lg:flex gap-3 items-center">
            <Link to="/login" className="bg-button-light-color p-3 rounded-md cursor-pointer">
              <FaRegUser className="text-base" />
            </Link>
            <div>
              <button className="flex items-center gap-2 rounded-md border-2 border-button-light-color p-2">
                <FaGlobe />
                <p>Eng</p>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with AnimatePresence for smooth opening/closing */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden bg-white text-black flex flex-col items-center gap-5 py-5"
            >
              <li><Link to="/" onClick={toggleMenu} className="font-semibold hover:text-button-light-color">Home</Link></li>
              <li><Link to="/payment" onClick={toggleMenu} className="font-semibold hover:text-button-light-color">Payment</Link></li>
              <li><Link to="/about" onClick={toggleMenu} className="font-semibold hover:text-button-light-color">About Us</Link></li>
              <li><Link to="/blog" onClick={toggleMenu} className="font-semibold hover:text-button-light-color">Blog</Link></li>
              <li><Link to="/contact" onClick={toggleMenu} className="font-semibold hover:text-button-light-color">Contact Us</Link></li>
              <div className="flex gap-3 items-center">
                <Link to="/login" className="bg-button-light-color p-3 rounded-md cursor-pointer">
                  <FaRegUser className="text-base" />
                </Link>
                <div>
                  <button className="flex items-center gap-2 rounded-md border-2 border-button-light-color p-2">
                    <FaGlobe />
                    <p>Eng</p>
                  </button>
                </div>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navigation;
