import scss from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<hr />
				<div className={scss.content}>
					<div className={scss.footer}>
						<h1>BRANDNAME</h1>
						<div className={scss.footerTexts}>
							<div>
								<p>О нас </p>
								<p> Контакты </p>
							</div>
							<div>
								<p>Способы оплаты</p>
								<p>Условия доставки </p>
							</div>
							<div>
								<p>Пользовательское соглашение </p>
								<p>Политика конфиденциальностишение </p>
							</div>
						</div>
					</div>
					<p className={scss.paragrafText}>
						brandname.com &#169; 2024 Все права защищены
					</p>
					<div className={scss.colorFooter}>
						<div className={scss.colorFooterYellow}>
							<h3>Onlineshop</h3>
							<h3>Onlineshop</h3>
						</div>
						<div className={scss.colorFooterGreen}>
							<h3>Onlineshop</h3>
							<h3>Onlineshop</h3>
							<h3>Onlineshop</h3>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
