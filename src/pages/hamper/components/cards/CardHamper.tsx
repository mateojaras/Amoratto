import React from "react";

interface Props {
	name: string;
	description: string;
	image?: string;
}

export const CardHamper = ({ description, name, image = "" }: Props) => {
	return (
		<div className="card_hamper_container">
			<div className="card_hamper_image">
				<img
					src={image ? image : require("../../../../assets/img/no_image.jpg")}
					alt=""
				/>
			</div>

			<div className="card_hamper_flex">
				<div className="card_hamper_name">
					<h2>{name}</h2>
				</div>
				<div className="card_hamper_description">
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	);
};
