import { NavLink } from "react-router-dom";

const ButtonProducts = () => {
	return (
		<NavLink
			className="btn_toProducts btn_toProducts_green"
			to={"/Amoratto/Products"}
		>
			NUESTROS PRODUCTOS
		</NavLink>
	);
};

export default ButtonProducts;
