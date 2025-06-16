import bcrypt from "bcrypt";
// biome-ignore lint/style/useImportType: <explanation>
import { HydratedDocument, Schema, model } from "mongoose";

interface IAdmin {
	email: string;
	password: string;
}

const adminSchema = new Schema<IAdmin>({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// Middleware que executa antes de salvar o admin no banco
// Aqui criptografamos a senha

adminSchema.pre("save", async function (this: HydratedDocument<IAdmin>, next) {
	if (!this.isModified("password")) return next();

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		return next(error as Error);
	}
});

export const Admin = model<IAdmin>("Admin", adminSchema);
