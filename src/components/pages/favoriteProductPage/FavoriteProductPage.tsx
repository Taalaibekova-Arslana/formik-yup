import { Button } from "@mui/material";
import { useGetFavoriteProductQuery } from "../../../redux/api/favoriteProductApi/FavoriteProductApi";
import scss from "./FavoriteProductPage.module.scss";
import { useNavigate } from "react-router-dom";

const FavoriteProductPage = () => {
	const { data } = useGetFavoriteProductQuery();
	const navigate = useNavigate();

	const navigateProductPage = () => {
		navigate("/product");
	};

	return (
		<div className={scss.FavoriteProductPage}>
			<div className="container">
				<div className={scss.buttonPlustext}>
					<h2>Избранные</h2>
					<Button
						variant="contained"
						color="success"
						onClick={navigateProductPage}>
						Главная страница
					</Button>
				</div>
				<div className={scss.FavoriteProducts}>
					{data?.map((item) => (
						<div className={scss.FavoriteProduct} key={item._id}>
							<img src={item.product.photoUrl} alt={item.product.productName} />
							<p>{item.product.productName}</p>
							<p>Цена:{item.product.price}</p>
							<p>Количество:{item.product.quantity}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FavoriteProductPage;
