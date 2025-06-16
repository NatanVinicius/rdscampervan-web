import type { Request, Response } from "express";
import { Van } from "../models/Van";

export const listVans = async (req: Request, res: Response) => {
	try {
		const vans = await Van.find();
		res.json(vans);
	} catch (error) {
		console.error("Error fetching vans", error);
		res.status(500).json({ message: "Internal error" });
	}
};
