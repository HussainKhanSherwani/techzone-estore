const express = require("express");
const app = express();
const router = express.Router();

// product Model
let CartSchema = require("../Models/Cart");
let ProductSchema = require("../Models/Product");


router.post("/", async (req, res) => {
  try {
    const { user_id, product_id,product_name,product_price,product_image } = req.body;
    let cart = await CartSchema.findOne({ user: user_id });
    if (!cart) {
      cart = new CartSchema({
        user: user_id,
        products: [{ product: product_id,name:product_name,price:product_price,image:product_image }],
        total: 0,
      });
    } else {
      const existingProduct = cart.products.find((p) =>
        p.product.equals(product_id)
      );
      // console.log(existingProduct);
      if (existingProduct) {
        existingProduct.quantity += 1; 
      } else {
        cart.products.push({
          product: product_id,
          name: product_name,
          price: product_price,
          image: product_image,
        }); 
      }
    }
    cart.total = await calculateTotalPrice(cart.products);

    await cart.save();

    res.status(200).json({ success: true, message: "Product added to cart", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding product to cart" });
  }
});

const calculateTotalPrice =async (products) => {
  let total = 0;
  for (const product of products) {
    const productPrice =await getProductPrice(product.product);
    total += productPrice * product.quantity;
  }
  return total;
};

const getProductPrice = async (productId) => {
  try {
    const product = await ProductSchema.findById(productId);
    if (product) {
      return product.product_price;
    }
    return 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
router.post("/:func",async (req,res)=>{
  try{
  const {id,product}=req.body
  // console.log(req.params.func);
  let cart =await CartSchema.findOne({user:id});
    if(!cart){
      res.status(404).json();
    }
    else{
       const existingProduct = cart.products.find((p) =>
        p.product.equals(product));
           if (existingProduct) {
            if(req.params.func==="-"){
              existingProduct.quantity -= 1;
            }
            else if(req.params.func==="+"){
              existingProduct.quantity += 1;
            }
            if(existingProduct.quantity===0){
              cart.products=cart.products.filter((p)=>!p.product.equals(product)
              )
            }
           }
          }
    cart.total =await calculateTotalPrice(cart.products);
    await cart.save();
    res.status(200).json({ success: true, message: "Product changed in cart", cart });
    }
     catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding product to cart" });
     }
  })
//get Cart
router.route("/:user").get((req, res) => {
const user=req.params.user
// console.log(user);
  CartSchema.findOne({user})
    .then((cart) => {
    if (!cart) {
    res.status(404).send({ message: "Cart not Found" });
    }
    else{
    res.json(cart);
    }
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete Cart
router
  .route("/:user/:sd/:ds")
  .delete((req,res)=>{
    const user=req.params.user
    CartSchema.findOneAndDelete({user:user}).then(cart=>{
    res.status(200).json({message:"Cart deleted",cart})
    }).catch(err=>{
      console.log(err)
    })
  })
module.exports = router;