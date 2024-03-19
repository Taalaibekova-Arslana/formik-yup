import scss from "./HomePage.module.scss";
const HomePage = () => {
	return (
		<div className={scss.HomePage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.textContent}>
						<div>
							<h1>
								NEW <span>COLLECTION </span>
							</h1>
							<h2>YOUR BRAND</h2>
						</div>
						<img
							src="https://i.pinimg.com/564x/07/63/7c/07637c5787674ac91200bdd5251ba6bb.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
