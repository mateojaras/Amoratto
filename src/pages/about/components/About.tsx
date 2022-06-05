import { Fragment } from "react";
import { Information } from "../../../components/Information";

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
		</Fragment>
	);
};

export default About;
