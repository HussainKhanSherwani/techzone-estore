const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    product_id: {
      type: mongoose.Schema.ObjectId,
    },
    product_name: {
      type: String,
    },
    product_quantity: {
      type: Number,
    },
    product_category: {
      type: String,
    },
    product_price: {
      type: Number,
    },
    product_description: {
      type: String,
    },
    product_image: {
      type: String,
    },
  },
  {
    collection: "products",
  }
);
module.exports = mongoose.model("Product", ProductSchema);
