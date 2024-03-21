/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { usePostProductMutation } from "../../../redux/api/productApi/product";

const AddProductPage: React.FC<ProductFormProps> = ({ closeModal }) => {
	const [postProduct] = usePostProductMutation();
	const formik = useFormik<FormValues>({
		initialValues: {
			productName: "",
			quantity: 0,
			price: 0,
			photoUrl: "",
		},
		validationSchema: Yup.object({
			productName: Yup.string().required("Обязательное поле"),
			quantity: Yup.number()
				.required("Обязательное поле")
				.positive("Должно быть положительным числом"),
			price: Yup.number()
				.required("Обязательное поле")
				.positive("Должно быть положительным числом"),
			photoUrl: Yup.string()
				.required("Обязательное поле")
				.url("Некорректный URL"),
		}),
		onSubmit: async (values: any) => {
			try {
				await postProduct(values);
				closeModal();
			} catch (error) {
				console.error("Ошибка при отправке формы:", error);
			}
		},
	});
	return (
		<div>
			<h3>Добавить продукт</h3>
			<form
				style={{ display: "flex", flexDirection: "column", gap: "20px" }}
				onSubmit={formik.handleSubmit}>
				<TextField
					label="Название продукта"
					variant="filled"
					color="success"
					type="text"
					name="productName"
					placeholder="Введите название продукта"
					value={formik.values.productName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					focused
				/>
				{formik.touched.productName && formik.errors.productName && (
					<div style={{ color: "red" }}>{formik.errors.productName}</div>
				)}
				<TextField
					label="Количество"
					variant="filled"
					color="success"
					type="number"
					name="quantity"
					placeholder="Введите количество"
					value={formik.values.quantity}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					focused
				/>
				{formik.touched.quantity && formik.errors.quantity && (
					<div style={{ color: "red" }}>{formik.errors.quantity}</div>
				)}
				<label htmlFor="price">Цена</label>
				<TextField
					label="Цена"
					variant="filled"
					color="success"
					type="number"
					name="price"
					placeholder="Введите цену"
					value={formik.values.price}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					focused
				/>
				{formik.touched.price && formik.errors.price && (
					<div style={{ color: "red" }}>{formik.errors.price}</div>
				)}
				<TextField
					label="URL изображения продукта"
					variant="filled"
					color="success"
					type="text"
					name="photoUrl"
					placeholder="Введите URL изображения продукта"
					value={formik.values.photoUrl}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					focused
				/>
				{formik.touched.photoUrl && formik.errors.photoUrl && (
					<div style={{ color: "red" }}>{formik.errors.photoUrl}</div>
				)}
				<Button variant="contained" color="success" type="submit">
					Отправить
				</Button>
			</form>
		</div>
	);
};
export default AddProductPage;
