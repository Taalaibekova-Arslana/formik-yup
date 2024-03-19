import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "../pages/homePage/HomePage";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import LoginPage from "../pages/loginPage/LoginPage";
import ProductPage from "../pages/productPage/ProductPage";
import scss from "./Layout.module.scss";
import FavoriteProductPage from "../pages/favoriteProductPage/FavoriteProductPage";
import AddBasketPage from "../pages/addBasketPage/AddBasketPage";

const Layout = () => {
	const location = useLocation();
	const hideHeaderFooter =
		location.pathname === "/registration" || location.pathname === "/login";

	return (
		<>
			<div className={scss.Layout}>
				{!hideHeaderFooter && <Header />}
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/registration" element={<RegistrationPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/product" element={<ProductPage />} />
						<Route
							path="/favorites-products"
							element={<FavoriteProductPage />}
						/>
						<Route path="/basket-products" element={<AddBasketPage />} />
					</Routes>
				</main>
				{!hideHeaderFooter && <Footer />}
			</div>
		</>
	);
};

export default Layout;
