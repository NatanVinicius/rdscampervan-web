import { Header } from "../../components/Header";
import { HeroSection } from "./HeroSection";
import { SearchFilter } from "./SearchFilter";
import { useState } from "react";
import { VansContent } from "./VansContent";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
	const [_filters, setFilters] = useState({
		capacity: 0,
		maxPrice: 0,
		sortingBy: "",
		newOrUsed: "",
	});

	return (
		<div>
			<Header />
			<HeroSection />
			<main className="py-6 xl:w-[1100px] mx-auto">
				<SearchFilter setFilters={setFilters} />
				<VansContent />
			</main>
			<Footer />
		</div>
	);
};
