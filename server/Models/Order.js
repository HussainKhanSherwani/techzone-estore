const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
      },
      quantity: {
        type: Number,
      },
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  address:{
    type:String
  },
  contact:{
    type:String
  }
});

module.exports = mongoose.model("Order", OrderSchema);
