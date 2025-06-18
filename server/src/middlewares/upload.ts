import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
	cloudinary,
	params: async (req, file) => {
		return {
			folder: "rdscampervan",
			allowed_formats: ["jpg", "png", "jpeg"],
			public_id: `${Date.now()}-${file.originalname}`,
		};
	},
});

const upload = multer({ storage });

export default upload;
