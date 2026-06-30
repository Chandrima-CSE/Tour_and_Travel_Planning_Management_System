import React, { useState } from "react";
import axios from "axios";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Kashmir Paradise",
    travelDate: "",
    travelers: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5500/bookings",
        formData
      );

      alert("Booking Successful");

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "Kashmir Paradise",
        travelDate: "",
        travelers: 1
      });

    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
          Book Your Dream Trip
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Select Destination
            </label>

            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option>Kashmir Paradise</option>
              <option>Ladakh Adventure</option>
              <option>Shimla Hills</option>
              <option>Darjeeling Delight</option>
              <option>Sundarban Safari</option>
              <option>Maldives Escape</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Travel Date
            </label>

            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Number of Travelers
            </label>

            <input
              type="number"
              name="travelers"
              min="1"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Book Now
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;