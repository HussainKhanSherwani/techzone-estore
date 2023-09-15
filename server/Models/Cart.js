const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema({


user: {
type: mongoose.Schema.Types.ObjectId,
ref: "Users",
},
products: [
{
product: {
type: mongoose.Schema.Types.ObjectId,
ref: "Product",
},
quantity: {
type: Number,
default: 1,
},
name:{
type: String
},
price:{
type: Number
},
image:{
type:String
}
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
});

module.exports = mongoose.model("Cart", CartSchema);
