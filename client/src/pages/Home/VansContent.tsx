import { IoSpeedometerOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useVans } from "../../hooks/useVans";
import type { VanType } from "../../types/VanType";
import { LoadingSpin } from "../../components/LoadingSpin";

const ITEMS_PER_PAGE = 9;

export const VansContent = () => {
	const { vans, loading } = useVans();

	const [currentPage, setCurrentPage] = useState(0);

	const pageCount = Math.ceil(vans.length / ITEMS_PER_PAGE);
	const startIndex = currentPage * ITEMS_PER_PAGE;
	const currentItems = vans.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	const handlePageChange = (event: { selected: number }) => {
		setCurrentPage(event.selected);
	};

	const navigate = useNavigate();

	const handleGoToDetails = (itemClicked: VanType) => {
		navigate("/details", { state: { item: itemClicked } });
	};

	return (
		<>
			{loading ? (
				<div className="w-full flex items-center justify-center">
					<LoadingSpin />
				</div>
			) : (
				<div>
					<section className="p-6 flex flex-col gap-10 lg:grid grid-cols-2 xl:grid-cols-3">
						{currentItems.map((van, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="bg-[#f5f5f5] shadow-md rounded-2xl hover:scale-101 hover:shadow-2xl duration-400"
							>
								<img
									src={van.coverImage}
									alt=""
									className="w-full h-[260px] rounded-t-2xl"
								/>
								<div className="px-2 py-4 text-[#282828]">
									<p className="text-2xl text-black font-semibold">
										{van.name}
									</p>
									<div className="py-4 flex flex-col gap-2">
										<div className="flex items-center gap-2 text-lg">
											<span>
												<IoSpeedometerOutline />
											</span>
											<p>{van.details.kilometersDetail} km</p>
										</div>
										<div className="flex items-center gap-2 text-lg">
											<span>
												<FaMapMarkerAlt />
											</span>
											<p>{van.details.capacityDetail}</p>
										</div>
										<div className="flex items-center gap-2 text-lg">
											<span>
												<IoIosPeople />
											</span>
											<p>{van.details.city}</p>
										</div>
									</div>
								</div>
								<div className="flex gap-4 px-4 pb-6">
									<button
										type="button"
										className="flex-1 border-2 border-[#006FFF] text-[#006FFF] text-lg py-2 px-2 rounded-lg hover:bg-[#006FFF] hover:text-white transition-colors duration-300 cursor-pointer"
										onClick={() => handleGoToDetails(van)}
									>
										Details
									</button>

									<Link
										to={"/contact"}
										className="flex-1  text-white text-center text-lg py-2 px-2 rounded-lg bg-[#EF4444] border-2 border-[#EF4444] cursor-pointer"
									>
										Enquire
									</Link>
								</div>
							</div>
						))}
					</section>
					<ReactPaginate
						pageCount={pageCount}
						onPageChange={handlePageChange}
						containerClassName="w-full flex items-center justify-center mt-6 gap-2"
						// Estilos para cada página numérica
						pageLinkClassName="px-3 py-1 border border-[#282828] rounded hover:bg-black hover:text-white cursor-pointer"
						activeLinkClassName="bg-[#282828] text-white"
						// Estilos para os botões "←" e "→"
						previousLabel="←"
						nextLabel="→"
						previousLinkClassName="px-2 py-1 border border-[#282828] rounded hover:bg-gray-200 cursor-pointer flex items-center justify-center"
						nextLinkClassName="px-2 py-1 border border-[#282828] rounded hover:bg-gray-200 cursor-pointer flex items-center justify-center"
						// Classes de página e navegação (podem ser vazias pois usamos *LinkClassName)
						pageClassName=""
						previousClassName=""
						nextClassName=""
					/>
				</div>
			)}
		</>
	);
};
