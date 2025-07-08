import { useState } from "react";
import { api } from "../lib/api";

type FormData = {
	name: string;
	email: string;
	number: string;
	subject: string;
	message: string;
};

export const useEnquireSendEmail = () => {
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const sendEmail = async ({
		name,
		email,
		number,
		subject,
		message,
	}: FormData) => {
		try {
			setLoading(true);
			const res = await api.post("/admin/enquire", {
				name,
				email,
				number,
				subject,
				message,
			});
			const data = res.data;
			if (data) {
				setIsEmailSent(true);
			}
		} catch (error) {
			setError(String(error));
			setIsEmailSent(false);
		} finally {
			setLoading(false);
		}
	};

	return { sendEmail, isEmailSent, loading, error };
};
