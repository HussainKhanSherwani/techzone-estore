const express = require("express");
const app = express();
const router=express.Router();
const bcrypt = require("bcrypt");

// user Model
let UserSchema = require('../Models/Users');

// SignUp User
router.route("/SignUp").post((req, res, next) => {
  UserSchema.create(req.body)
    .then((result) => {
    
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      return next(err);
    });
});

//Login User
router.route("/Login").post((req,res)=>{
  const username=req.body.username;
  const password=req.body.password;

    UserSchema.findOne({username}).then(user=>{
      if (!user) {
        res.status(404).send({message:"User not Found"})
      }
      bcrypt.compare(password,user.password).then(isMatch=>{
        if(isMatch){
          const payload={user_id:user.id,username:user.username,fullname:user.fullname}
          res.status(200).send(payload);
        }
        else{
          res.status(403).send({ message: "Incorrect Password"});

        }
      })

    }).catch(err=>{
      console.log(err.message);
        }
    ).catch(err=>{
      console.log(err.message);
        }
    )
  }
)


      

module.exports = router;