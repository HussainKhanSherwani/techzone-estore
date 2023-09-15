const express = require("express");
const app = express();
const router = express.Router();


let OrderSchema = require("../Models/Order");
let CartSchema = require("../Models/Cart");
let ProductSchema = require("../Models/Product");
router.route("/:cart").post((req,res)=>{
    OrderSchema.create(req.body)
      .then((order) => {
        res.status(200).json({message:"order Placed",order})
        order.products.forEach(product => {
          ProductSchema.findById(product.product).then(productn=>{

            const newquantity=productn.product_quantity-product.quantity;
            ProductSchema.findByIdAndUpdate(product.product,{$set:{product_quantity:newquantity}}).then(res=>{
              // console.log(productn.product_quantity)
            })
          })
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Error in placing order"});
        console.log(err.message);
      });
    CartSchema.findByIdAndDelete(req.params.cart).then(res=>{
      // console.log(res.data)
    }).catch(err=>{
      console.log(err);
    })
});
        
router.route("/").post((req,res)=>{
  const user=req.body.user
  // console.log(req.body.user)
  OrderSchema.find({user})
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router;
