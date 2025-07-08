import { GiSurferVan } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";

export const HeroDetails = () => {
	return (
		<section className="flex flex-col items-center justify-center bg-[#006FFF] text-white py-12">
			<h1 className="text-2xl font-semibold lg:text-4xl">
				We'd love to hear from you!
			</h1>
			<h2 className="text-lg my-3 lg:text-2xl lg:my-6">
				How to get in touch and where to find us
			</h2>
			<div className="flex flex-col gap-4 max-w-[1100px] lg:flex-row lg:gap-10">
				<div className="flex flex-col items-center justify-center gap-4 bg-white rounded-2xl text-[#282828] p-4">
					<GiHouseKeys className="text-6xl" />
					<p>If you wish purchase a campervan</p>
					<a href="tel:+640273847740" className="text-[#006FFF] font-semibold">
						027 384 7740
					</a>
					<a
						href="mailto:sales@rdscampervan.co.nz"
						className="text-[#006FFF] font-semibold"
					>
						sales@rdscampervan.co.nz
					</a>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 bg-white rounded-2xl text-[#282828] p-4">
					<GiSurferVan className="text-6xl" />
					<p>If you already own a campervan </p>
					<a href="tel:+640273847740" className="text-[#006FFF] font-semibold">
						027 384 7740
					</a>
					<a
						href="mailto:sales@rdscampervan.co.nz"
						className="text-[#006FFF] font-semibold"
					>
						sales@rdscampervan.co.nz
					</a>
				</div>
			</div>
		</section>
	);
};
