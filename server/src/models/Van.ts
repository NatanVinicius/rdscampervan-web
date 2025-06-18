import { Schema, model } from "mongoose";

export const Van = model(
	"Van",
	new Schema({
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		price: {
			type: Number,
			required: true,
		},
		coverImage: {
			type: String,
			required: true,
		},
		details: {
			type: {
				kilometersDetail: { type: Number, required: true },
				capacityDetail: { type: Number, required: true },
				imagesDetail: [{ type: String, required: true }],
			},
		},
	}),
);
