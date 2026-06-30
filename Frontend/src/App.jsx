import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TourPackages from "./components/TourPackages";
import PackageDetails from "./components/PackageDetails";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Register from "./components/Register";

import PrivateRoute from "./utils/PrivateRoute";
import MyBookings from "./components/MyBookings";

const token = localStorage.getItem("token");

function App() {
  return (
    <>
      {token && <Header />}

      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>

          <Route path="/" element={<Home />} />

          <Route path="/packages" element={<TourPackages />} />

          <Route path="/packages/:id" element={<PackageDetails />} />

          <Route path="/booking" element={<Booking />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          
          <Route path="/mybookings" element={<MyBookings />} />

        </Route>

      </Routes>

      {token && <Footer />}
    </>
  );
}

export default App;