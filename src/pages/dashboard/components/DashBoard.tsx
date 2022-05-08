import { useEffect, useState } from "react";
import ProductService from "../../../services/apialegra/ProductService";
import { CardSarahs } from "./cards/CardSarahs";
import { FilterSarahs } from "./filters/FilterSarahs";

interface Product {
	itemCategory: { name: string };
	name: string;
	price: Array<{ price: string }>;
	images: Array<{ url: string }>;
}

const DashBoard = () => {
	const [listProducts, setlistProducts] = useState<Array<Product>>();
	useEffect(() => {
		ProductService.getListOfProducts().then((response) => {
			console.log(response);
			setlistProducts(response.data);
		});
	}, []);

	return (
		<div className="dashboard_container">
			<div className="dashboard_grid">
				<div className="dashboard_filter">
					<FilterSarahs />
				</div>
				<div className="dashboard_products">
					<div className="dashboard_container_products">
						<div className="dashboard_products_grid">
							{listProducts?.map((product, index) => (
								<CardSarahs
									key={index}
									categories={product?.itemCategory?.name}
									name={product?.name}
									price={product?.price[0]?.price}
									image={product?.images ? product?.images[0]?.url : ""}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
