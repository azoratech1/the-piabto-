import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import BookingTable from "../components/BookingTable";

import Loader from "../components/Loader";

import {
  getBookings,
  updateBookingStatus,
} from "../services/api";

import toast from "react-hot-toast";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const { data } = await getBookings();

      setBookings(data.bookings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (
    bookingId,
    status
  ) => {
    try {
      await updateBookingStatus(bookingId, {
        status,
      });

      toast.success("Booking Updated");

      fetchBookings();
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <AdminLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Bookings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage customer bookings
        </p>

      </div>

      {loading ? (
        <Loader />
      ) : (
        <BookingTable
          bookings={bookings}
          onStatusChange={handleStatusChange}
        />
      )}

    </AdminLayout>
  );
};

export default Bookings;