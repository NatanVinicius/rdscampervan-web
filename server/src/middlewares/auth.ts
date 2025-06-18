import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
	id: string;
}

//middlware to protect routes

export const authenticateJWT = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader) {
			res.status(401).json({ error: "Token missing" });
			return;
		}

		const token = authHeader.split(" ")[1];

		if (!token) {
			res.status(401).json({ error: "Token missing" });
			return;
		}

		const secret = process.env.JWT_SECRET;

		if (!secret) {
			res.status(500).json({ error: "Missing JWT secret in environment" });
			return;
		}

		const decoded = jwt.verify(token, secret) as JwtPayload;

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(req as any).adminId = decoded.id;

		next();
	} catch (error) {
		res.status(401).json({ message: "Invalid or expired token" });
	}
};
