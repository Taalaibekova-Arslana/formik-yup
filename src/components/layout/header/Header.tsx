import logo from "../../../assets/logo.png";
import login from "../../../assets/ButtonВойти.svg";
import trash from "../../../assets/ButtonTrash.svg";
import favorite from "../../../assets/ButtonИзбранное.svg";
import logoutIcon from "../../../assets/Vector.svg";
import scss from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
	const navigate = useNavigate();
	const [isProductPage, setIsProductPage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsProductPage(
			location.pathname === "/product" ||
				location.pathname === "/favorites-products" ||
				location.pathname === "/basket-products"
		);
	}, [location]);

	const handleNavigateLogin = () => {
		navigate("/login");
	};
	const handleNavigateFavorite = () => {
		navigate("/favorites-products");
	};

	const handleNavigateBaket = () => {
		navigate("/basket-products");
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		navigate("/login");
	};

	return (
		<div className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<img src={logo} alt="" />
					<div>
						{isProductPage ? (
							<>
								<div className={scss.icons}>
									<div className={scss.logoutLog}>
										<img
											style={{ cursor: "pointer" }}
											src={logoutIcon}
											onClick={logout}
											alt=""
										/>
										<p>Выйти</p>
									</div>
									<img
										style={{ cursor: "pointer" }}
										src={trash}
										onClick={handleNavigateBaket}
										alt=""
									/>
									<img
										style={{ cursor: "pointer" }}
										src={favorite}
										onClick={handleNavigateFavorite}
										alt=""
									/>
								</div>
							</>
						) : (
							<>
								<img
									style={{ cursor: "pointer" }}
									src={login}
									onClick={handleNavigateLogin}
									alt=""
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
