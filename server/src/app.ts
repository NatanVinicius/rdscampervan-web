import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import adminRoutes from "./routes/adminRoutes";
import router from "./routes/vanRoutes";

dotenv.config();

const app = express();

//midlewares

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/api/admin", adminRoutes);

export default app;
