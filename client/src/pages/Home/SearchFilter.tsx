type FilterProps = {
	setFilters: React.Dispatch<
		React.SetStateAction<{
			capacity: number;
			maxPrice: number;
			sortingBy: string;
			newOrUsed: string;
		}>
	>;
};

export const SearchFilter = ({ setFilters }: FilterProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section className="px-6 mt-4">
			<form className="grid grid-cols-2 gap-4 w-full p-4 rounded-2xl bg-[#282828] md:flex">
				<select
					id="filters"
					className="text-sm rounded-lg block w-full p-2.5 bg-[#E2E4E8] border-[#E2E4E8] placeholder-gray-400 text-[#282828]"
					onChange={handleChange}
					name="capacity"
				>
					<option value="" hidden>
						Capacity
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<select
					id="filters"
					className="text-sm rounded-lg block w-full p-2.5 bg-[#E2E4E8] border-[#E2E4E8] placeholder-gray-400 text-[#282828]"
					onChange={handleChange}
					name="maxPrice"
				>
					<option value="" hidden>
						Max price
					</option>
					<option value="10000">Up to $20.000</option>
					<option value="20000">Up to $40.000</option>
					<option value="30000">Up to $60.000</option>
					<option value="40000">Up to $80.000</option>
				</select>
				<select
					id="filters"
					className="text-sm rounded-lg block w-full p-2.5 bg-[#E2E4E8] border-[#E2E4E8] placeholder-gray-400 text-[#282828]"
					onChange={handleChange}
					name="sortingBy"
				>
					<option value="" hidden>
						Sorting by
					</option>
					<option value="lowest">Lowest price</option>
					<option value="highest">Highest price</option>
					<option value="latest">Latest</option>
				</select>
				<select
					id="filters"
					className="text-sm rounded-lg block w-full p-2.5 bg-[#E2E4E8] border-[#E2E4E8] placeholder-gray-400 text-[#282828]"
					onChange={handleChange}
					name="newOrUsed"
				>
					<option value="" hidden>
						New/Used
					</option>
					<option value="used">Used</option>
					<option value="new">New</option>
				</select>
			</form>
		</section>
	);
};
