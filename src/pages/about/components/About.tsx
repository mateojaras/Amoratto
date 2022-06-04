import { url } from "inspector";
import React, { Fragment } from "react";

const About = () => {
	return (
		<Fragment>
			<section className="about_container_photo">
				<div className="about_opacity"></div>
				<div className="about_photo_text">
					<span>Nuestra historia</span>
					<h3>Como llegamos a ayudarte a tener el mejor detalle</h3>
				</div>
			</section>
			<section className="about_history">
				<div className="about_history_grid">
					<div className="about_history_photo_container">
						<div className="about_history_photo">
							<div className="photo_owner">
								<img src={require("../../../assets/img/TatoP.png")} alt="" />
							</div>
						</div>
					</div>

					<div className="about_history_text">
						<div className="about_history_text_photo" />
						<div className="about_history_text_information">
							<h2>
								{" "}
								MI NOMBRE ES TATIANA CARDONA,{" "}
								<span> FUNDADORA DE AMORATTO</span>
							</h2>
							<p>
								Hi, my name is Gayle Lanphier, owner and co-founder of Nuts
								About Granola, LLC (now called Sarah’s Sweet Savory Snacks!). My
								mission as a dietitian is to establish the best eating plan
								possible to help individuals achieve their health and fitness
								goals. I focus on REAL FOOD and how to best utilize it for
								weight management, sports performance and healthy living.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default About;
