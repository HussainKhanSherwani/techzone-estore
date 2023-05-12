const express = require("express");
const app = express();
const router = express.Router();

// product Model
let ProductSchema = require("../Models/Product");

// get Products by category
router.route("/").get((req,res)=>{
  ProductSchema.find().then(product=>{
    res.json(product);
}).catch(err=>{
  console.log(err);
  console.log(err);
})
})

// router.get("/:category", (req, res, next) => {
//   const { category } = req.params;

//   Product.find({ product_category: category })
//     .then((products) => {
//       res.json(products);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });



//Login User
module.exports = router;
