// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     items: { type: Array, required: true },
//     amount: { type: Number, required: true },
//     address: { type: Object, required: true },
//     status: { type: String, default: "Food Processing" },
//     date: { type: Date, default: Date.now },
//     payment: { type: Boolean, default: false },
//     canceled: { type: Boolean, default: false },
//     cancellationDate: { type: Date }
// });

// const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
// export default orderModel;


import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: {
    type: String,
    default: "Food Processing",
    enum: ["Canceled", "Out for Delivery", "Confirmed", "Delivered", "Food Processing", "Shipped"],
  },
  payment: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  statusUpdatedAt: { type: Date, default: Date.now },
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
