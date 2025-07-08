import { useState } from "react";
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const res = await api.post("/admin/login", { email, password });
			const { token, admin } = res.data;
			console.log(token, admin);
			localStorage.setItem("token", token);
			localStorage.setItem("admin", JSON.stringify(admin));
			navigate("/painel");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-screen flex items-center justify-center p-2 bg-linear-to-b from-[#2B7FFF] to-[#0f2f5e]">
			<form
				onSubmit={handleLogin}
				className="flex flex-col gap-4 w-full p-4 bg-white rounded-2xl md:max-w-[400px]"
			>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						className="w-full border border-black/40 bg-white rounded-lg p-2 outline-none"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						className="w-full border border-black/40 bg-white rounded-lg p-2 outline-none"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="w-full flex mt-4 justify-center">
					<button
						type="submit"
						className=" text-white text-2xl py-2 px-4 rounded-lg bg-[#EF4444] border-2 border-[#EF4444] cursor-pointer"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
