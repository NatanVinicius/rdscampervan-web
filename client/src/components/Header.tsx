import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import bgBlack from "../assets/logo-black.png";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className="xl:w-[1100px] mx-auto">
			<div className="relative flex items-center justify-between w-full p-6 bg-[#E5E7EB] z-1000">
				<div className="">
					<img src={bgBlack} alt="logo" className="w-30 md:w-45" />
				</div>
				<button
					type="button"
					onClick={toggleMenu}
					className="md:hidden text-2xl"
				>
					{!menuOpen ? (
						<CiMenuBurger className="text-[#282828] text-2xl" />
					) : (
						<CiMenuFries className="text-[#282828] text-2xl" />
					)}
				</button>
				<nav className="hidden md:block">
					<ul className="flex gap-6">
						<li>
							<p className="text-lg px-2 group relative w-max">
								<Link to={"/"}>Home</Link>
								<span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
									{}
								</span>
							</p>
						</li>

						<li>
							<p className="text-lg px-2 group relative w-max">
								<Link to={"/aboutus"}>About us</Link>
								<span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
									{}
								</span>
							</p>
						</li>
						<li>
							<p className="text-lg px-2 group relative w-max">
								<Link to={"/layouts"}>Layouts</Link>
								<span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
									{}
								</span>
							</p>
						</li>
						<li>
							<p className="text-lg px-2 group relative w-max">
								<Link to={"/contact"}>Contact us</Link>
								<span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
									{}
								</span>
							</p>
						</li>
					</ul>
				</nav>
			</div>

			{
				/* MENU MOBILE*/
				<AnimatePresence initial={false}>
					{menuOpen && (
						<motion.div
							key="mobile-menu"
							initial={{ opacity: 0, y: -200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -200 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className=" fixed w-full bg-[#E5E7EB] z-50 sm:hidden"
						>
							<ul className="flex flex-col items-center p-4 gap-4 text-sm font-semibold text-[#282828]">
								<li className="flex items-center justify-center w-full">
									<span className="absolute left-6">
										<FaArrowAltCircleRight className="text-[#006FFF]" />
									</span>
									<Link to={"/"} className="text-center" onClick={toggleMenu}>
										Home
									</Link>
								</li>
								<li className="flex items-center justify-center w-full">
									<span className="absolute left-6">
										<FaArrowAltCircleRight className="text-[#006FFF]" />
									</span>
									<Link to={"/"} className="text-center" onClick={toggleMenu}>
										About us
									</Link>
								</li>
								<li className="flex items-center justify-center w-full">
									<span className="absolute left-6">
										<FaArrowAltCircleRight className="text-[#006FFF]" />
									</span>
									<Link to={"/"} className="text-center" onClick={toggleMenu}>
										Layouts
									</Link>
								</li>
								<li className="flex items-center justify-center w-full">
									<span className="absolute left-6">
										<FaArrowAltCircleRight className="text-[#006FFF]" />
									</span>
									<Link
										to={"/contact"}
										className="text-center"
										onClick={toggleMenu}
									>
										Contact us
									</Link>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			}
		</header>
	);
};
