const express = require("express");
const router = express.Router();


router.post("/login", (req, res) => {
  if(req.body.email == "test@email.com" && req.body.password == "123456"){
    res.status(201).json({
      message: "Login Successful",
      token:'JKBoNJOIihuco34212141afljsnjfaihknhiPHJ321Dnjpoj'
    })
  }else{
    res.status(401).json({
      message: "Login Failed"
    })
  }
});

router.post("/forgotpassword", (req, res) => {
  email = req.body.email;
  if(email=="test@email.com"){
    res.status(201).json({
      newPassword: "test-pass-123"
    })
  }else{
    res.status(401).json({
      message: "Invalid email address"
    })
  }
})

module.exports = router;
