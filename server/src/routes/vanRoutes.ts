import express from "express";
import { createVan } from "../controllers/createVan";
import { deleteVan } from "../controllers/deleteVan";
import { editVan } from "../controllers/editVan";
import { getVanById } from "../controllers/getVanById";
import { listVans } from "../controllers/listVans";
import { authenticateJWT } from "../middlewares/auth";
import upload from "../middlewares/upload";

const router = express.Router();

// Middleware multer configurado para receber:
// - 1 arquivo no campo "coverImage" (imagem principal)
// - vários arquivos no campo "imagesDetail" (array de imagens)
const multerMiddleware = upload.fields([
	{ name: "coverImage", maxCount: 1 },
	{ name: "imagesDetail", maxCount: 10 },
]);

router.get("/vans", listVans);
router.get("/vans/:id", getVanById);
router.post("/van", authenticateJWT, multerMiddleware, createVan);
router.put("/vans/:id", authenticateJWT, editVan);
router.delete("/vans/:id", authenticateJWT, deleteVan);

export default router;
