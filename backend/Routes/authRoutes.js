import express from "express";
import { registerUser, loginUser } from "../Controller/authController.js";

const router = express.Router();

router.post("/register", registerUser); 
router.post("/login", loginUser);
router.get("/logout", (req, res) => {
  res.clearCookie("token");  
  return res.redirect("/"); 
});


export default router;
