import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

//midlewares

app.use(cors());
app.use(express.json());

//Rotas
app.get("/", (req, res) => {
	res.send("API is running");
});

export default app;
