import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/apialegra/ProductService";

interface Category {
	id: string;
	name: string;
}

export const FilterSarahs = () => {
	const [listCategories, setlistCategories] = useState<Array<Category>>();
	useEffect(() => {
		ProductService.getListOfCategories().then((response) => {
			setlistCategories(response.data);
		});
	}, []);

	const [check, setCheck] = useState(false);
	return (
		<div className="filter_grid">
			<input
				className="search_products"
				type="text"
				placeholder="Buscar Producto..."
			/>
			<button className="button"> Buscar </button>
			<div className="categories_grid">
				<span className="name_Category">Categorias</span>
				{listCategories?.map((category) => (
					<label className="container_category" key={category.id}>
						<input
							type="radio"
							checked={check}
							onClick={() => setCheck(!check)}
							onChange={() => undefined}
						/>
						<i></i>
						<span className="radio_category">{category.name}</span>
					</label>
				))}
			</div>
		</div>
	);
};
