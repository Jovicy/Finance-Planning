import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Reason from "./components/Reason";

import AboutPage from "./pages/AboutPage";
import PlansPage from "./pages/PlansPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import Forbidden from "./pages/Forbidden";
import ForgetPassword from "./pages/ForgetPassword";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import SuccessStories from "./components/SuccessStories";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const location = useLocation();

  // Define paths and patterns where header/footer should be hidden
  const hiddenPathPatterns = [
    "/login",
    "/register",
    "/admin",
    "/not-found",
    "/forget-password",
    "/contact",
    "/about",
    "/blog",
    "/payment",
  ];

  // Check if the current path matches any in the hidden paths or dynamic patterns
  const hideHeaderFooter = hiddenPathPatterns.some((path) =>
    new RegExp(`^${path}(/.*)?$`).test(location.pathname)
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <AboutUs />
              <SuccessStories />
              <Reason />
              <Plans />
              <Newsletter />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />

        {/* Hidden Header/Footer Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/not-found" element={<Forbidden />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />

        {/* Catch-all Route for 404 Errors */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}


export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
