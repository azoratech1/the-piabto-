const BookingTable = ({ bookings, onStatusChange }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>

            <th className="text-left px-6 py-4">
              Customer
            </th>

            <th className="text-left px-6 py-4">
              Room
            </th>

            <th className="text-left px-6 py-4">
              Guests
            </th>

            <th className="text-left px-6 py-4">
              Amount
            </th>

            <th className="text-left px-6 py-4">
              Status
            </th>

          </tr>
        </thead>

        <tbody>

          {bookings?.map((booking) => (
            <tr
              key={booking._id}
              className="border-t border-slate-100"
            >

              <td className="px-6 py-4">
                <h3 className="font-semibold">
                  {booking.customerName}
                </h3>

                <p className="text-sm text-slate-500">
                  {booking.email}
                </p>
              </td>

              <td className="px-6 py-4">
                {booking.room?.title}
              </td>

              <td className="px-6 py-4">
                {booking.guests}
              </td>

              <td className="px-6 py-4">
                ₹ {booking.totalAmount}
              </td>

              <td className="px-6 py-4">

                <select
                  value={booking.status}
                  onChange={(e) =>
                    onStatusChange(
                      booking._id,
                      e.target.value
                    )
                  }
                  className="border border-slate-200 rounded-lg px-3 py-2 outline-none"
                >
                  <option value="PENDING">
                    Pending
                  </option>

                  <option value="CONFIRMED">
                    Confirmed
                  </option>

                  <option value="CANCELLED">
                    Cancelled
                  </option>

                  <option value="COMPLETED">
                    Completed
                  </option>
                </select>

              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
};

export default BookingTable;