import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { BsBrush, BsBook } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";

import { Fragment } from "react";
import Slideshow from "./Slideshow";

const Home = () => {
	return (
		<Fragment>
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
			<section className="resume_information">
				<div className="resume_information_grid">
					<div className="stationery">
						<div className="stationery_img"></div>
					</div>
					<div className="party">
						<div className="party_img_container">
							<div className="party_img"></div>
						</div>

						<div className="party_stationey_information">
							<h2>
								TODO LO NECESARIO PARA <span>FIESTAS Y OFICINA!</span>
							</h2>
							<p>
								En nuestra seccion de papeleria podras encontrar todo lo
								necesario e indispesable para oficina, colegio o hogar, en
								nuestra seccion de piñateria podras encontrar tematicas
								exclusivas para tus fiestas y detalles unicos para regalar, te
								ofrecemos VARIEDAD.
							</p>
							<div className="icons_container">
								<NavLink to={"/Amoratto/Products"}>
									<div className="party_icon_redirect">
										<div className="icon_circle">
											<BsBrush />
										</div>
										<h3>Piñateria</h3>
									</div>
								</NavLink>
								<NavLink to={"/Amoratto/Products"}>
									<div className="party_icon_redirect">
										<div className="icon_circle">
											<BsBook />
										</div>
										<h3>Papeleria</h3>
									</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container_slide">
				<div className="slider">
					<Slideshow />
				</div>
				<div className="favorites_flex">
					<div className="text_favorite">
						Mira algunos de nuestros productos <span> mas vendidos </span>
					</div>
					<div className="information_favorite">
						No sabes que regalar? echa un vistazo a algunos de nuestros
						productos y servicios mas vendidos y encuentra ese detalle que hara
						feliz a tu persona favorita.
					</div>
					<div className="button_favorite">
						<NavLink
							className="btn_toProducts btn_toProducts_green"
							to={"/Amoratto/Products"}
						>
							NUESTROS PRODUCTOS
						</NavLink>
					</div>
				</div>
			</section>
			<section className="phrase">
				<div className="phrase_opacity"></div>
				<div className="phrase_grid">
					<ImQuotesRight />
					<div className="phrase_text">
						<span>
							Productos exclusivos y de calidad a tu <span> alcance</span>
						</span>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
