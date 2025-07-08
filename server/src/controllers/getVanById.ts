import type { Request, Response } from "express";
import { Van } from "../models/Van";

export const getVanById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const van = await Van.findById(id);
		if (!van) {
			res.status(404).json({ message: "Van not found" });
			return;
		}
		console.log("Entrou em listVans com req.originalUrl = ", req.originalUrl);

		res.json(van);
	} catch (error) {
		console.error("Error fetching van", error);
		res.status(500).json({ message: "Internal error" });
	}
};
