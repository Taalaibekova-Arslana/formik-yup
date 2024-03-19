import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ButtonProps } from "@mui/material";
import { loginSchema } from "../../../utils/validation/loginValidation";
import { usePostLoginMutation } from "../../../redux/api/loginApi/loginApi";
import scss from "./LoginPage.module.scss";
const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const [postLogin] = usePostLoginMutation();

	const loginButtonProps: ButtonProps = {
		type: "submit",
	};
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: async (values) => {
			const result = await postLogin({
				email: values.email,
				password: values.password,
			});
			if ("data" in result) {
				const { token } = result.data;
				localStorage.setItem("token", token);
				localStorage.setItem("isAuth", "true");
				navigate("/product");
			}
		},
	});
	return (
		<form className={scss.formInputRegistr} onSubmit={formik.handleSubmit}>
			<h1>Вход</h1>
			<div>
				<label htmlFor="email">Email</label> <br />
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Введите email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>
			{formik.touched.email && formik.errors.email ? (
				<div style={{ color: "red" }}>{formik.errors.email}</div>
			) : null}
			<div>
				<label htmlFor="password">Password</label> <br />
				<input
					id="password"
					type="password"
					name="password"
					placeholder="Введите пароль"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>

			{formik.touched.password && formik.errors.password ? (
				<div style={{ color: "red" }}>{formik.errors.password}</div>
			) : null}
			<Link to="/registration">Нет аккаунта, зарегистрируйтесь</Link>
			<div>
				<button
					style={{ color: "blueviolet" }}
					{...loginButtonProps}
					color="secondary">
					Войти
				</button>
			</div>
		</form>
	);
};
export default LoginForm;
