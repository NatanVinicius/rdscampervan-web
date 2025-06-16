import { isNumberObject } from "node:util/types";
import type { Request, Response } from "express";
import { Van } from "../models/Van";

interface vanType {
	name: string;
	description: string;
	price: number;
	details: {
		kilometersDetail: number;
		capacityDetail: number;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		imagesDetail: any;
	};
}

export const editVan = async (req: Request, res: Response) => {
	try {
		const { name, description, price, kilometersDetail, capacityDetail } =
			req.body;

		if (
			!name ||
			!description ||
			!price ||
			!kilometersDetail ||
			!capacityDetail
		) {
			res.status(500).json({ message: "All input is required" });
			return;
		}

		const van = await Van.findById(req.params.id);
		const updatedVan: vanType = {
			name,
			description,
			price: Number(price),
			details: {
				kilometersDetail,
				capacityDetail,
				imagesDetail: van?.details?.imagesDetail,
			},
		};

		await Van.findByIdAndUpdate(req.params.id, updatedVan, { new: true });

		res.json(updatedVan);
	} catch (error) {
		console.error("Error updating van", error);
		res.status(500).json({ message: "Internal error" });
	}
};
