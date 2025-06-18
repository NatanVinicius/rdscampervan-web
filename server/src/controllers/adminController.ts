import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";

export const loginAdmin = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			res.status(401).json({ error: "Email and password are required" });
			return;
		}

		const admin = await Admin.findOne({ email });
		if (!admin) {
			res.status(401).json({ error: "Invalid credentials" });
			return;
		}

		const isPasswordValid = await bcrypt.compare(password, admin.password);
		if (!isPasswordValid) {
			res.status(401).json({ error: "Invalid credentials" });
			return;
		}

		const token = jwt.sign(
			{ id: admin._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: "1d" },
		);

		res.status(200).json({
			message: "Login successful",
			token,
			admin: {
				id: admin._id,
				email: admin.email,
			},
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
