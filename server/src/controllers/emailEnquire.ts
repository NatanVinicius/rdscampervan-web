import type { Request, Response } from "express";
import mailjet from "node-mailjet";

type emailEnquire = {
	name: string;
	email: string;
	number: string;
	subject: string;
	message: string;
};

export const emailEnquire = async (req: Request, res: Response) => {
	const { name, email, number, subject, message }: emailEnquire = req.body;

	console.log(req.body);

	const mailjetClient = mailjet.apiConnect(
		process.env.MJ_APIKEY_PUBLIC || "",
		process.env.MJ_APIKEY_PRIVATE || "",
	);

	if (!name || !email || !number || !subject || !message) {
		res.status(400).json({ error: "All fields is required" });
		return;
	}
	try {
		const result = await mailjetClient
			.post("send", { version: "v3.1" })
			.request({
				Messages: [
					{
						From: {
							Email: "natanviniciusdepaula@gmail.com", // Email autorizado no Mailjet
							Name: "RDSCampervan",
						},
						To: [
							{
								Email: "thalitacristianefabri@gmail.com", // Email da empresa que vai receber
								Name: name,
							},
						],
						Subject: subject,
						TextPart: `Mensagem de ${email}:\n\n${message}`,
						ReplyTo: {
							Email: email,
							Name: name,
						},
					},
				],
			});
		res.status(200).json({ message: "Mensagem enviada com sucesso!" });
	} catch (error) {
		if (typeof error === "object" && error !== null && "response" in error) {
			// @ts-expect-error: response might not exist on error
			console.error("Erro ao enviar email:", error.response?.body || error);
		} else {
			console.error("Erro ao enviar email:", error);
		}
		res.status(500).json({ error: "Erro ao enviar o email." });
	}
};
