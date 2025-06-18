import type { Request, Response } from "express";
import { Van } from "../models/Van";

export const deleteVan = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;

		const van = await Van.findById(id);

		if (van) {
			await Van.findByIdAndDelete(van.id);
			res.send(200);
			return;
		}

		res.status(500).json({ message: "Van not found" });
	} catch (error) {
		console.error("Error deleting van", error);
		res.status(500).json({ message: "Internal error" });
	}
};
