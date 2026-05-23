import Room from "../models/Room.js";
import Booking from "../models/Booking.js";

export const getDashboardStats = async (req, res) => {
  try {
    // total rooms
    const totalRooms = await Room.countDocuments();

    // total bookings
    const totalBookings = await Booking.countDocuments();

    // pending bookings
    const pendingBookings = await Booking.countDocuments({
      status: "PENDING",
    });

    // confirmed bookings
    const confirmedBookings = await Booking.countDocuments({
      status: "CONFIRMED",
    });

    // total revenue
    const bookings = await Booking.find({
      status: "CONFIRMED",
    });

    const totalRevenue = bookings.reduce(
      (acc, item) => acc + item.totalAmount,
      0
    );

    res.status(200).json({
      success: true,
      stats: {
        totalRooms,
        totalBookings,
        pendingBookings,
        confirmedBookings,
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};