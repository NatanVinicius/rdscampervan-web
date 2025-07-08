import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarouselVans } from "./CarouselVans";
import { Specifications } from "./Specification";
import selfContainedImg from "../../assets/self-contained-img.png";

type Van = {
	id: number;
	name: string;
	description: string;
	price: number;
	coverImage: string;
	details: {
		kilometersDetail: number;
		capacityDetail: number;
		city: string;
		features: string;
		imagesDetail: string[];
	};
};

export const DetailsPage = () => {
	const [van, setVan] = useState<Van | null>(null);
	const location = useLocation();
	const state = location.state as { item: Van };

	useEffect(() => {
		if (state?.item) {
			setVan(state.item);
		}
	}, [state]);

	return (
		<>
			<Header />
			<div className=" max-w-[1100px] mx-auto px-6">
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col gap-2 text-2xl font-semibold">
						<h1>{van?.name}</h1>
						<h2 className="text-[#006FFF]"> ${van?.price}</h2>
					</div>
					<div className="pr-4">
						<Link to={"/"}>Return</Link>
					</div>
				</div>
				<div className="mt-6">
					<CarouselVans images={van?.details.imagesDetail ?? []} />
				</div>
				<div className="text-center">
					<p className="text-2xl font-semibold py-6">Specifications</p>
					<div className="flex flex-col gap-4 w-full lg:flex-row">
						<Specifications
							title={"Vehicle"}
							optionsDesc={van?.description ?? ""}
						/>
						<Specifications
							title={"Features"}
							optionsDesc={van?.details?.features ?? ""}
						/>
					</div>
				</div>
				<div className="flex items-top gap-4 my-6">
					<img src={selfContainedImg} alt="" className="w-10 h-10" />
					<a
						href="https://www.legislation.govt.nz/regulation/public/2023/0217/latest/whole.html"
						className="text-sm"
					>
						This vehicle is certified self-contained in accordance with the
						Plumbers, Gas and Drain Fitters (Self-Contained Vehicles)
						Regulations 2024.
					</a>
				</div>
				<div className="flex w-full items-center justify-end my-6">
					<Link
						to={"/contact"}
						className=" text-white text-lg py-2 px-4 rounded-lg bg-[#EF4444] border-2 border-[#EF4444] cursor-pointer"
					>
						Enquire
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
};
