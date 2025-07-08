interface SpecificationsProps {
	optionsDesc: string;
	title: string;
}

export const Specifications = ({ optionsDesc, title }: SpecificationsProps) => {
	return (
		<div className="flex-1 bg-white rounded-2xl">
			<h1
				className={
					title === "Vehicle"
						? "text-white py-3 bg-[#006FFF] text-xl rounded-t-xl"
						: "text-white py-3 bg-[#292f37] text-xl rounded-t-xl"
				}
			>
				{title}
			</h1>
			<div className="flex flex-col p-2">
				{optionsDesc.split("\n").map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<p key={index} className="text-start">
						{">"} {item}
					</p>
				))}
			</div>
		</div>
	);
};
