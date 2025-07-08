import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { VanType } from "../types/VanType";

export const useVans = () => {
	const [vans, setVans] = useState<VanType[] | []>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		api
			.get("/vans")
			.then((res) => setVans(res.data))
			.catch((_err) => setError("Failed to load vans"))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 1000),
			);
	}, []);

	return { vans, loading, error };
};
