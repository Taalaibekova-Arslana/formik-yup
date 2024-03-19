import { Button } from "@mui/material";
import { useGetBasketProductQuery } from "../../../redux/api/addBasketPageApi/AddBasketPageApi";
import scss from "./AddBasketPage.module.scss";
import { useNavigate } from "react-router-dom";

const AddBasketPage = () => {
	const { data: getBasketProduct = [] } = useGetBasketProductQuery();
	const navigate = useNavigate();

	const navigateProductPage = () => {
		navigate("/product");
	};
	return (
		<div className={scss.AddBasketPage}>
			<div className="container">
				<div className={scss.buttonPlusText}>
					<h2>Корзина</h2>
					<Button
						variant="contained"
						color="success"
						onClick={navigateProductPage}>
						Главная страница
					</Button>
				</div>
				<div className={scss.basketProducts}>
					{getBasketProduct.map((item) => (
						<div className={scss.basketProduct} key={item._id}>
							<img src={item.product.photoUrl} alt={item.product.productName} />
							<p>{item.product.productName}</p>
							<p>Цена:{item.product.price}</p>
							<p>Количество:{item.product.quantity}</p>
							<Button variant="contained" color="success">
								Купить
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AddBasketPage;
