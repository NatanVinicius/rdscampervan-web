import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

type Items = {
	img: string;
};

interface CarouselVansProps {
	images: string[];
}

export const CarouselVans = ({ images }: CarouselVansProps) => {
	const [items, setItems] = useState<Items[]>();
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [modalImage, setModalImage] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const newImagesArray = images.map((img) => ({
			img: img,
		}));
		setItems(newImagesArray);
	}, [images, currentIndex]);

	const nextImage = () => {
		if (items) {
			setCurrentIndex((prevIndex) =>
				prevIndex === items.length - 1 ? 0 : prevIndex + 1,
			);
		}
	};

	const prevImage = () => {
		if (items) {
			setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
		}
	};

	const handleModalImage = () => {
		setModalImage((prev) => !prev);
	};

	useEffect(() => {
		console.log(items);
	});

	return (
		<>
			{modalImage && (
				<div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-1000 flex items-center justify-center">
					{" "}
				</div>
			)}
			<div
				className={
					modalImage
						? "fixed top-0 left-0 flex items-center justify-center gap-2 h-full w-full z-100000"
						: "flex items-center justify-center gap-2"
				}
			>
				<button type="button" onClick={prevImage}>
					<FaArrowCircleLeft className="text-black/50 text-3xl md:text-4xl" />
				</button>
				<div
					className={
						modalImage
							? "relative flex-1 flex items-center justify-center rounded-2xl ease-in-out duration-1000 md:max-h-[450px] lg:max-w-[1100px] h-full"
							: "relative flex-1 flex items-center justify-center rounded-2xl ease-in-out duration-1000 md:max-h-[450px] lg:max-h-[500px] "
					}
				>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<img
						src={items?.[currentIndex]?.img}
						alt=""
						onClick={handleModalImage}
						className={
							modalImage
								? "object-center rounded-2xl max-h-[600px] ease-in-out duration-1000"
								: "object-center rounded-2xl max-h-[300px] ease-in-out duration-1000 md:max-h-[450px]"
						}
					/>
					<div className="absolute bottom-4 flex items-center justify-center gap-2 w-full">
						{items?.map((_item, idx) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={idx}
								onClick={() => setCurrentIndex(idx)}
								className={
									currentIndex === idx
										? "w-3 h-3 bg-white rounded-full"
										: "w-3 h-3 bg-white/60 rounded-full"
								}
							>
								{" "}
							</div>
						))}
					</div>
				</div>
				<button type="button" onClick={nextImage}>
					<FaArrowCircleRight className="text-black/50 text-3xl md:text-4xl" />
				</button>
				{modalImage && (
					<IoIosCloseCircleOutline
						onClick={handleModalImage}
						className="absolute top-2 right-2 text-4xl text-black/60"
					/>
				)}
			</div>
		</>
	);
};
