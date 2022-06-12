import { Fragment } from "react";
import { Information } from "../../../components/Information";
import ButtonProducts from "./ButtonProducts";

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
			<Information
				mainPhoto={
					"https://sarahssnacks.com/wp-content/uploads/2019/10/dot-bg.png"
				}
				secondPhoto={
					"https://sarahssnacks.com/wp-content/uploads/2019/10/53160191_10157057061979469_7682333536212221952_o.jpg"
				}
				owner={true}
				textWeightSlim={"MI NOMBRE ES TATIANA CARDONA,"}
				textWeightThick={"FUNDADORA DE AMORATTO"}
				phrase={
					"Hi, my name is Gayle Lanphier, owner and co-founder of Nuts About Granola, LLC (now called Sarah’s Sweet Savory Snacks!). My mission as a dietitian is to establish the best eating plan possible to help individuals achieve their health and fitness goals. I focus on REAL FOOD and how to best utilize it for weight management, sports performance and healthy living."
				}
			/>
			<section className="about_history_flex container">
				<div className="about_tittle">
					<span>Te guiare a elegir o crear</span>
					<h3>el mejor detalle</h3>
				</div>
				<div className="about_history_p">
					<p>
						I have been a Nutrition consultant since 2000 specializing in weight
						management, sports nutrition and geriatrics. Guiding the development
						of Sarah’s Sweet Savory Snacks using my fundamental principle of
						real food, big flavor and everything in moderation, has been the
						highlight of my career!
					</p>
					<p>
						Nutrition is a complicated topic to navigate, with ever-changing
						recommendations and guidelines, it leaves most dazed and confused. I
						am here to help! If you have any questions about how our products
						can fit into your diet, or just questions in general about your
						diet, please fill out the form and I will do my best help.
					</p>
				</div>
				<div className="about_button">
					<ButtonProducts />
				</div>
			</section>
		</Fragment>
	);
};

export default About;
