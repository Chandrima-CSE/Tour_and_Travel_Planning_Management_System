import React, { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {

    const res = await axios.get("http://localhost:5500/bookings");

    setBookings(res.data);

  };

  const deleteBooking = async (id) => {

    await axios.delete(`http://localhost:5500/bookings/${id}`);

    alert("Booking Deleted Successfully");

    getBookings();

  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        My Bookings
      </h1>

      <table className="w-full bg-white shadow-lg">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-3">Name</th>

            <th className="p-3">Destination</th>

            <th className="p-3">Travel Date</th>

            <th className="p-3">Travelers</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking._id} className="text-center border-b">

              <td className="p-3">{booking.name}</td>

              <td className="p-3">{booking.destination}</td>

              <td className="p-3">{booking.travelDate}</td>

              <td className="p-3">{booking.travelers}</td>

              <td className="p-3">

                <button
                  onClick={() => deleteBooking(booking._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyBookings;