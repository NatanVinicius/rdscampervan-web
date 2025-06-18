import express from "express";
import { loginAdmin } from "../controllers/adminController";
import { adminRegister } from "../controllers/adminRegister";
import { emailEnquire } from "../controllers/emailEnquire";

const adminRoutes = express.Router();

adminRoutes.post("/login", loginAdmin);
adminRoutes.post("/register", adminRegister);
adminRoutes.post("/enquire", emailEnquire);

export default adminRoutes;
