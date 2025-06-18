import type { Request, Response } from "express";
import { Van } from "../models/Van";

export const createVan = async (req: Request, res: Response) => {
	try {
		console.log("teste aqui CREATE");
		const { name, description, price, kilometersDetail, capacityDetail } =
			req.body;

		//coverimage
		const coverImage =
			req.files &&
			(req.files as Record<string, Express.Multer.File[]>).coverImage?.[0]
				?.path;

		//images detail array

		const imagesDetail =
			req.files &&
			(req.files as Record<string, Express.Multer.File[]>).imagesDetail?.map(
				(file: Express.Multer.File) => file.path,
			);

		if (
			!name ||
			!price ||
			!coverImage ||
			!kilometersDetail ||
			!capacityDetail ||
			!imagesDetail
		) {
			res.status(400).json({ error: "Missing required fields" });
			return;
		}

		const newVan = await Van.create({
			name,
			description,
			price,
			coverImage,
			details: {
				kilometersDetail: Number(kilometersDetail),
				capacityDetail: Number(capacityDetail),
				imagesDetail,
			},
		});

		const savedVan = await newVan.save();
		res.status(201).json(savedVan);
	} catch (error) {
		console.error("❌ Erro ao criar van:", error);
		res.status(500).json({
			message: "Internal error",
			error: error instanceof Error ? error.message : String(error),
			stack: error instanceof Error ? error.stack : undefined,
		});
	}
};
