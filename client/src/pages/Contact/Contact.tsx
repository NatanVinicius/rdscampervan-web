import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { EnquireSendEmail } from "./EnquireSendEmail";
import { HeroDetails } from "./HeroDetails";

export const Contact = () => {
	return (
		<>
			<Header />
			<HeroDetails />
			<EnquireSendEmail />
			<Footer />
		</>
	);
};
