import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export const WhatsAppIcon = () => {
	return (
		<a
			className="icon_whatsapp"
			href="https://api.whatsapp.com/send?phone=573105450117&text=Hola, estoy interesado en producto o servicio"
		>
			<BsWhatsapp />
		</a>
	);
};
