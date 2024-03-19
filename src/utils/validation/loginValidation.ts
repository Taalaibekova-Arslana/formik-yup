import * as Yup from "yup";

export const loginSchema = Yup.object({
	email: Yup.string()
		.email("Please enter your email")
		.required("Обязательная форма"),
	password: Yup.string()
		.min(6, "Пароль должен содержать минимум 6 символов")
		.required("Обязательная форма"),
});
