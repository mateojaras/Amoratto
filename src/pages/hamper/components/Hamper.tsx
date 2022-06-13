import React, { Fragment } from "react";
import { useHamper } from "../hook/useHamper";
import { CardHamper } from "./cards/CardHamper";

const Hamper = () => {
	const { listHampers } = useHamper();
	return (
		<div className="hamper_container container">
			<h2> Nuestras Anchetas</h2>
			<div className="dashboard_products_grid">
				{listHampers?.map((hamper, index) => (
					<CardHamper
						key={index}
						name={hamper?.name}
						description={hamper?.description}
						image={hamper?.images ? hamper?.images[0]?.url : ""}
					/>
				))}
			</div>
		</div>
	);
};

export default Hamper;
