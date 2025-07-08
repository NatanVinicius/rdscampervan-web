import SplitText from "../../components/motion/SplitText";

export const HeroSection = () => {
	return (
		<section className="w-full bg-[url('/src/assets/heroBG.jpg')] bg-cover bg-center text-white lg:h-[450px] 2xl:h-[650px]">
			{/* Overlay escura sobre a imagem */}
			<div className="w-full h-full bg-black/70 z-10">
				<div className="flex flex-col justify-center max-w-[1200px] h-full mx-auto py-20 px-6">
					<h1 className="text-3xl font-bold sm:text-5xl">
						<SplitText
							text="Welcome"
							className="text-3xl font-bold tracking-wider md:text-6xl"
							delay={100}
							duration={0.6}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
						/>
					</h1>
					<h2 className="text-xl sm:text-3xl mt-4">
						<SplitText
							text="Your trip start here!"
							className="text-3xl font-bold tracking-tight md:text-6xl"
							delay={100}
							duration={0.6}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
						/>
					</h2>
				</div>
			</div>
		</section>
	);
};
