const express = require("express");
const app = express();
const router = express.Router();

// product Model
let ProductSchema = require("../Models/Product");

// get Products by category
router.route("/:category").get((req,res)=>{
  const product_category=req.params.category;
  // console.log({product_category})
  ProductSchema.find({product_category}).then(product=>{
    res.json(product);
}).catch(err=>{
  console.log(err);
})
})
// get All Products
router.route("/").get((req, res) => {
  ProductSchema.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get specific product
router.route("/:product/:kill").get((req, res) => {
    const _id=req.params.product
    // console.log(_id);
  // ProductSchema.findById(_id)
  //   .then((product) => {
  //     console.log(product);
  //     res.json(product);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
//Login User
module.exports = router;
