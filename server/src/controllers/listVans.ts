import type { Request, Response } from "express";
import { Van } from "../models/Van";

type filterProps = {
	capacityDetail?: number;
	maxPrice?: number;
	sortingBy?: string;
	newOrUsed?: string;
};

export const listVans = async (req: Request, res: Response) => {
	try {
		const query: Record<string, unknown> = {};

		const { capacityDetail, maxPrice, newOrUsed, sortingBy } = req.query;

		if (capacityDetail) {
			query["details.capacityDetail"] = Number(capacityDetail);
		}

		if (maxPrice) {
			query.price = { $lte: Number(maxPrice) };
		}

		if (newOrUsed === "new" || newOrUsed === "used") {
			query.newOrUsed = newOrUsed;
		}

		let sortOption = {};
		if (sortingBy === "lowest") {
			sortOption = { price: 1 }; //cresc
		} else if (sortingBy === "highest") {
			sortOption = { price: -1 };
		} else if (sortingBy === "latest") {
			sortOption = { createdAt: -1 };
		}

		const vans = await Van.find(query).sort(sortOption);
		res.status(200).json(vans);
	} catch (error) {
		console.error("Erro ao buscar vans:", error);
		res.status(500).json({ message: "Erro interno do servidor" });
	}
};
