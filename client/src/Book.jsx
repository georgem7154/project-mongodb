import React, { useState, useEffect } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    cust_name: "",
    age: "",
    class: "",
  });

  const [bookings, setBookings] = useState([]);
  const [classFilter, setClassFilter] = useState("");
  const [sameClassBookings, setSameClassBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all bookings
  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/allbookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Load bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId
        ? `http://localhost:5000/updatebooking/${editingId}`
        : "http://localhost:5000/addbooking";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editingId ? "Booking updated!" : "Booking successful!");
        setFormData({ cust_name: "", age: "", class: "" });
        setEditingId(null);
        fetchBookings(); // Refresh the list
      } else {
        alert("Failed to process booking. Try again!");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  // Remove a booking
  const removeBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/removebooking/${id}`, { method: "DELETE" });
      if (response.ok) {
        alert("Booking removed!");
        fetchBookings();
      } else {
        alert("Failed to remove booking.");
      }
    } catch (error) {
      console.error("Error removing booking:", error);
    }
  };

  // Edit a booking
  const editBooking = (booking) => {
    setFormData({
      cust_name: booking.cust_name,
      age: booking.age,
      class: booking.class,
    });
    setEditingId(booking._id);
  };

  // Find people in the same class
  const fetchSameClassBookings = async () => {
    try {
      const response = await fetch(`http://localhost:5000/sameclass/${classFilter}`);
      const data = await response.json();
      setSameClassBookings(data);
    } catch (error) {
      console.error("Error fetching same class bookings:", error);
    }
  };

  return (
    <div className="p-16 ">
      {/* Booking Form */}
      <div className="bg-green-300 dark:bg-pink-800 p-6 rounded-lg shadow-md w-80 mx-auto">
        <h2 className="text-black dark:text-white text-lg mb-4 text-center">{editingId ? "Update Booking" : "Book Your Seat"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="cust_name" placeholder="Customer Name" value={formData.cust_name} onChange={handleChange} className="w-full shadow-md shadow-black p-2 mb-2 border rounded" required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 mb-2 border rounded shadow-md shadow-black" required />
          <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleChange} className="w-full p-2 mb-4 border rounded shadow-md shadow-black" required />
          <button type="submit" className="bg-indigo-600 dark:bg-yellow-300 dark:text-black text-white p-2 w-full shadow-lg shadow-black rounded">{editingId ? "Update" : "Submit"}</button>
        </form>
      </div>

      {/* Display Bookings */}
      <h2 className="text-lg font-bold mt-6 dark:text-white text-center">All Bookings</h2>
      <ul className="mt-2">
        {bookings.map((booking) => (
          <li key={booking._id} className="p-2 bg-gray-100 dark:bg-slate-700 dark:text-white mb-2 flex justify-between">
            {booking.cust_name} - {booking.age} - {booking.class}
            <div>
              <button onClick={() => editBooking(booking)} className="bg-yellow-400 dark:bg-yellow-300 dark:text-black text-white px-2 rounded mr-2">Edit</button>
              <button onClick={() => removeBooking(booking._id)} className="bg-red-600 dark:bg-red-400 dark:text-black text-white px-2 rounded">Remove</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Find People in the Same Class */}
      <div className="text-center mt-6">
        <h2 className="text-lg dark:text-white font-bold">Find People in Same Class:</h2>
        <input type="text" placeholder="Class" value={classFilter} onChange={(e) => setClassFilter(e.target.value)} className="p-2 border rounded mr-2" />
        <button onClick={fetchSameClassBookings} className="bg-purple-500 dark:bg-purple-700 text-white p-2 rounded">Find</button>
        <ul className="mt-2">
          {sameClassBookings.map((booking) => (
            <li key={booking._id} className="p-2 text-center dark:text-white dark:bg-slate-600 bg-gray-100 mb-2">
              {booking.cust_name} - {booking.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
