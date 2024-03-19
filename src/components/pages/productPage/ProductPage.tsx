import { useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import AddProductPage from "../addProductPage/AddProductPage";
import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../../redux/api/productApi/product";
import scss from "./ProductPage.module.scss";
import { Button } from "@mui/material";
import heart from "../../../assets/Vector (1).svg";
import heartGreen from "../../../assets/Vector (2).svg";
import { usePostFavoriteProductMutation } from "../../../redux/api/favoriteProductApi/FavoriteProductApi";
import { usePostBasketProductMutation } from "../../../redux/api/addBasketPageApi/AddBasketPageApi";

const ProductPage = () => {
	const { data, isLoading } = useGetProductQuery();
	const navigate = useNavigate();
	const [createProduct] = usePostFavoriteProductMutation();
	const [postBasketProduct] = usePostBasketProductMutation();
	const [isOpen, setIsOpen] = useState(false);
	const [itemFavorite, setItemFavorite] = useState<null | string>(null);
	const [isFavorite, setIsFavorite] = useState(false);
	const [isBasket, setIsBasket] = useState(false);
	const [itemBasket, setItemBasket] = useState<null | string>(null);

	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const isAuth = localStorage.getItem("isAuth");
		if (isAuth !== "true") {
			navigate("/login");
		}
	}, [navigate]);

	const handleFavoriteHeart = async (_id: number) => {
		await createProduct(_id.toString());
		setIsFavorite(true);
		setItemFavorite(_id.toString());
	};

	const handleBasket = async (_id: number) => {
		await postBasketProduct(_id.toString());
		setIsBasket(true);
		setItemBasket(_id.toString());
	};

	return (
		<div className={scss.ProductPage}>
			<div className="container">
				<div className={scss.buttons}>
					<Button
						variant="contained"
						color="success"
						onClick={() => setIsOpen(!isOpen)}>
						+ Добавить новый продукт
					</Button>
				</div>
				<Modal isOpen={isOpen} onClose={handleModal}>
					<AddProductPage closeModal={handleModal} />
				</Modal>
				<div className={scss.cardProducts}>
					{isLoading ? (
						<h1>Loading...</h1>
					) : (
						data?.map((item) => (
							<div className={scss.cardProduct} key={item._id}>
								<img src={item.photoUrl} alt={item.productName} />
								<div className={scss.favoriteHeart}>
									{itemFavorite === item._id.toString() && isFavorite ? (
										<img
											src={heartGreen}
											alt=""
											onClick={() => {
												setIsFavorite(true);
												setItemFavorite(null);
											}}
										/>
									) : (
										<img
											src={heart}
											alt=""
											onClick={() => handleFavoriteHeart(item._id)}
										/>
									)}
								</div>
								<p>{item.productName}</p>
								<p>Цена:{item.price}</p>
								<p>Количество:{item.quantity}</p>
								{itemBasket === item._id.toString() && isBasket ? (
									<>
										<Button
											style={{ width: "280px" }}
											variant="contained"
											color="success"
											onClick={() => {
												setIsBasket(true);
												setItemBasket(null);
											}}>
											Добавлено в корзину
										</Button>
									</>
								) : (
									<>
										<Button
											style={{ width: "230px" }}
											variant="outlined"
											onClick={() => handleBasket(item._id)}>
											Добавить в корзину
										</Button>
									</>
								)}
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
