import logo from "../assets/logo-white.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="w-full bg-[#282828] py-10">
			<div className="flex flex-col items-center justify-center lg:flex-row lg:w-[1200px] lg:mx-auto lg:justify-between">
				<div className="">
					<img src={logo} alt="" className="lg:w-[400px]" />
					<div className="flex justify-between text-white mt-2 lg:justify-around">
						<p className=" flex items-center gap-2">
							<span>
								<FaInstagram />
							</span>{" "}
							Instagram
						</p>
						<p className=" flex items-center justify-end gap-2">
							<span>
								<FaFacebookSquare />
							</span>{" "}
							Facebook
						</p>
					</div>
				</div>
				<div className="hidden flex-col gap-3 text-gray-400 lg:flex ">
					<p className="text-white">
						<strong>Auckland</strong>
					</p>
					<p>175, Russel Road</p>
					<p>Manurewa</p>
					<p>Auckland, 2013</p>
					<p>027 384 5560</p>
				</div>
				<div className="mx-6 mt-6">
					<nav>
						<ul className="flex gap-2 text-[#fff] lg:flex-col">
							<li>
								<p className="text-lg px-2 py-3 group relative w-max">
									<Link to={"/"} className="text-center">
										Home
									</Link>
									<span className="absolute top-11 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
										{}
									</span>
								</p>
							</li>

							<li>
								<p className="text-lg px-2 py-3 group relative w-max">
									<Link to={"/aboutus"} className="text-center">
										About us
									</Link>
									<span className="absolute top-11 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
										{}
									</span>
								</p>
							</li>
							<li>
								<p className="text-lg px-2 py-3 group relative w-max">
									<Link to={"/layouts"} className="text-center">
										Layouts
									</Link>
									<span className="absolute top-11 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
										{}
									</span>
								</p>
							</li>
							<li>
								<p className="text-lg px-2 py-3 group relative w-max">
									<Link to={"/contactus"} className="text-center">
										Contact us
									</Link>
									<span className="absolute top-11 left-0 w-0 transition-all h-0.5 bg-[#006FFF] group-hover:w-full">
										{}
									</span>
								</p>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="mt-6 border-t-2 border-white">
				<p className="mt-6 text-white text-center">
					Copyright 2025 RDS Campervan ltd.
				</p>
			</div>
		</footer>
	);
};
