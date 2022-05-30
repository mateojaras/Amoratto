import React from "react";

interface Props {
	categories: string;
	name: string;
	price: string;
	image?: string;
}

export const CardSarahs = ({ categories, name, price, image = "" }: Props) => {
	return (
		<div className="card_container">
			<div className="card_grid">
				<div className="image_container">
					<img
						src={image ? image : require("../../../../assets/img/no_image.jpg")}
						alt=""
					/>
				</div>
				<div className="information_grid">
					<div className="categories">
						<h3>{categories}</h3>
					</div>
					<div className="name_product">
						<h2>{name}</h2>
					</div>
					<div className="btn"></div>
				</div>
			</div>
		</div>
	);
};
