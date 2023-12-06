const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Types.ObjectId,
      ref: "Property",
    },
    
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    tokens: {
      type: Number,
      min: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
