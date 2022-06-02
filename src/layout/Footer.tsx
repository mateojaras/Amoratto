import React from "react";
import {
	BsFacebook,
	BsInstagram,
	BsTwitter,
	BsTelephone,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_grid">
				<div className="footer_logo">
					<img
						src="	https://sarahssnacks.com/wp-content/uploads/2019/10/head-logo.png"
						alt="Logo"
					/>
					<div className="social_icons">
						<BsFacebook />
						<BsInstagram />
						<BsTwitter />
					</div>
				</div>
				<div className="footer_information">
					<h3>
						{" "}
						<FiMapPin /> Calle del hospital • Mutata{" "}
					</h3>
					<h3>
						{" "}
						<HiOutlineMail /> leidytatianacardonaz@gmail.com
					</h3>
					<h3>
						{" "}
						<BsTelephone /> 3105450117
					</h3>
				</div>
			</div>
			<div className="footer_privacy">
				© Copyright 2022 Amoratto papeleria y piñateria | Todos los derechos
				reservados |{" "}
			</div>
		</div>
	);
};

export default Footer;
