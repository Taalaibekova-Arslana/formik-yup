import { Link, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../../redux/api/userApi/userApi";
import { Field, Form, Formik } from "formik";
import { registrationSchema } from "../../../utils/validation/registrationValidation";
import scss from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
	const navigate = useNavigate();

	const [postUser] = usePostUserMutation();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handlePost = async (values: any) => {
		const { email, userName, password } = values;

		const result = await postUser({ email, userName, password });
		console.log(result);
		if (result) {
			navigate("/login");
		}
	};

	return (
		<div className={scss.LoginPage}>
			<Formik
				initialValues={{ email: "", password: "", userName: "" }}
				onSubmit={handlePost}
				validationSchema={registrationSchema}>
				{({ errors, touched }) => {
					return (
						<Form className={scss.formInput}>
							<h2>РЕГИСТРАЦИЯ</h2>
							<div>
								<label htmlFor="email">Email</label>
								<br />
								<Field
									className={scss.formField}
									label="Email"
									color="secondary"
									id="email"
									name="email"
									type="email"
									placeholder="Email"
									focused
								/>
							</div>
							{touched.email && errors.email ? (
								<div style={{ color: "red" }}>{errors.email}</div>
							) : null}
							<div>
								<label htmlFor="userName">Имя пользователя</label>
								<br />
								<Field
									className={scss.formField}
									label="UseName"
									color="secondary"
									id="userName"
									name="userName"
									type="text"
									placeholder="Имя пользователя"
									focused
								/>
							</div>

							{touched.userName && errors.userName ? (
								<div style={{ color: "red" }}>{errors.userName}</div>
							) : null}
							<div>
								<label htmlFor="password">Password</label>
								<br />
								<Field
									className={scss.formField}
									label="Password"
									color="secondary"
									id="password"
									name="password"
									type="password"
									placeholder="Введите пароль"
									focused
								/>
							</div>

							{touched.password && errors.password ? (
								<div style={{ color: "red" }}>{errors.password}</div>
							) : null}
							<Link to="/login">У меня есть аккаунт войти</Link>
							<button type="submit">Зарегистироваться</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default RegistrationPage;
