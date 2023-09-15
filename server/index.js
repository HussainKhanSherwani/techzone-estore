let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
require("dotenv").config();

// Express Route
const userRoute = require("../server/routes/Users.route");
const productRoute=require("../server/routes/Products.route");
const cartRoute=require("../server/routes/Carts.route");
const orderRoute=require("../server/routes/Orders.route");

// Connecting mongoDB Database
mongoose
  .connect(
    process.env.CONNECTION_URL
  )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/users", userRoute);
app.use("/product",productRoute);
app.use("/cart",cartRoute)
app.use("/order",orderRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
