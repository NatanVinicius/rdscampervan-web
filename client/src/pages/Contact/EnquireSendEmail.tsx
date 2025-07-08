import { useState } from "react";
import { useEnquireSendEmail } from "../../hooks/useEnquireSendEmail";
import { LoadingSpin } from "../../components/LoadingSpin";

type FormData = {
	name: string;
	email: string;
	number: string;
	subject: string;
	message: string;
};

export const EnquireSendEmail = () => {
	const [form, setForm] = useState<FormData>({
		name: "",
		email: "",
		number: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState<Partial<FormData>>({});
	const { sendEmail, isEmailSent, loading } = useEnquireSendEmail();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		// Example: check if the event target is a select element
		if (e.target instanceof HTMLSelectElement) {
			const subjectValue = e.target.options[e.target.selectedIndex].text;
			setForm((prev) => ({ ...prev, [name]: subjectValue }));
			return;
		}
		setForm((prev) => ({ ...prev, [name]: value.toString() }));
	};

	const validationFields = () => {
		const newErrors: Partial<FormData> = {};

		if (!form.name.trim()) newErrors.name = "Name is required";
		if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
			newErrors.email = "Invalid email";
		if (!form.number.trim()) newErrors.number = "Number is required";
		if (!form.message.trim()) newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validationFields()) return;
		sendEmail(form);
	};

	return (
		<section className="max-w-[1100px] mx-auto flex flex-col items-center justify-center my-12 px-6">
			<h1 className="text-2xl font-semibold">Send us a message</h1>
			<p>
				<span className="text-red-500">*</span>Required fields
			</p>
			{loading ? (
				<LoadingSpin />
			) : (
				<form
					onSubmit={handleSubmit}
					className="relative flex flex-col gap-4 mt-6  lg:grid grid-cols-2"
				>
					<div>
						<label htmlFor="first-name">Name*</label>
						<input
							type="text"
							name="name"
							id="name"
							className="w-full border border-black/40 bg-white rounded-lg p-2 outline-none"
							onChange={handleChange}
						/>
						{errors.name && <p className="text-red-500">{errors.name}</p>}
					</div>
					<div>
						<label htmlFor="email">Email*</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full border border-black/40 bg-white rounded-lg p-2 outline-none"
							onChange={handleChange}
						/>

						{errors.email && <p className="text-red-500">{errors.email}</p>}
					</div>
					<div>
						<label htmlFor="contact-number">Number*</label>
						<input
							type="number"
							name="number"
							id="number"
							className="w-full border border-black/40 bg-white rounded-lg p-2 outline-none"
							onChange={handleChange}
						/>

						{errors.number && <p className="text-red-500">{errors.number}</p>}
					</div>
					<div>
						<label htmlFor="filters">Contact reason</label>
						<select
							id="subject"
							className="rounded-lg w-full p-2.5 bg-white border border-black/40 placeholder-gray-400 text-[#282828] outline-none"
							// onChange={handleChange}
							name="subject"
							required
							onChange={handleChange}
						>
							<option value="" hidden>
								Select
							</option>
							<option value="1">Purchase a campervan</option>
							<option value="2">
								Request information about a campervan I own
							</option>
							<option value="3">Other</option>
						</select>
					</div>
					<div>
						<label htmlFor="contact-description">How can we help?*</label>
						<textarea
							name="message"
							id="message"
							className="w-full min-h-[150px] border border-black/40 bg-white rounded-lg p-2 outline-none"
							onChange={handleChange}
						/>

						{errors.message && <p className="text-red-500">{errors.message}</p>}
					</div>
					<div className="w-full flex justify-end md:absolute bottom-0">
						<button
							type="submit"
							className="mt-12 text-white text-2xl py-2 px-4 rounded-lg bg-[#EF4444] border-2 border-[#EF4444] cursor-pointer"
						>
							Send
						</button>
					</div>
				</form>
			)}
			{isEmailSent && (
				<div>
					<p>
						We have received your message and will respond within 2 business
						days, thank you!
					</p>
				</div>
			)}
		</section>
	);
};
