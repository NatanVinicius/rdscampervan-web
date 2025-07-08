import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { DetailsPage } from "../pages/Details/DetailsPage";
import { Contact } from "../pages/Contact/Contact";
import { ScrollToTop } from "../utils/ScrollToTop";
import { Admin } from "../pages/Admin/Admin";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Painel } from "../pages/Admin/Painel";

export const AppRoutes = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/details" element={<DetailsPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/admin" element={<Admin />} />
				<Route
					path="/painel"
					element={
						<ProtectedRoute>
							<Painel />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	);
};
