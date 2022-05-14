import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
	return (
		<section className="background_primary_container">
			<div className="background_opacity"></div>
			<div className="container_information">
				<div className="container_text">
					<h2>VEN Y CONOCE</h2>
					<h1>AMORATTO</h1>
					<h3>TUS DETALLES EN BUENAS MANOS</h3>
				</div>
				<div className="redirect_container">
					<NavLink className="btn_toProducts" to={"/Amoratto/Products"}>
						VER NUESTROS PRODUCTOS
						<FiArrowRight />
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default Home;
