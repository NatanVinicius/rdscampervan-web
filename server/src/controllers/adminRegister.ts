import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { Admin } from "../models/Admin";

export const adminRegister = async (req: Request, res: Response) => {
	try {
		const { email, password, masterKey } = req.body;

		if (masterKey !== process.env.MASTER_KEY) {
			res.status(403).json({ error: "Unauthorized" });
			return;
		}

		const isEmailInvalid = await Admin.findOne({ email });

		if (isEmailInvalid) {
			res.status(409).json({ error: "Email already been used" });
			return;
		}

		const newAdmin = new Admin({ email, password });
		await newAdmin.save();

		const jwtSecret = process.env.JWT_SECRET;
		if (!jwtSecret) {
			res.status(500).json({ error: "JWT secret not configured" });
			return;
		}
		res.status(201).json({ message: "Admin created" });
	} catch (error) {
		console.error("Error registering admin:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
