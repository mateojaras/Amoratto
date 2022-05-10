import { useEffect, useState } from "react";
import ProductService from "../../../services/apialegra/ProductService";

interface Product {
	itemCategory: { name: string };
	name: string;
	price: Array<{ price: string }>;
	images: Array<{ url: string }>;
}

interface Pagination {
	start: number;
	totalPages: number;
	pages: Array<number>;
}

export const useDashboard = () => {
	const [listProducts, setlistProducts] = useState<Array<Product>>();
	const [pagination, setPagination] = useState<Pagination>({
		start: 0,
		totalPages: 0,
		pages: [0],
	});
	useEffect(() => {
		getListOfProducts(pagination.start);
	}, []);

	const getListOfProducts = (start: number) => {
		ProductService.getListOfProducts(start)
			.then((response) => {
				console.log(response);
				setlistProducts(response?.data?.data);
				setPagination({
					start: start,
					totalPages: response?.data?.metadata?.total / 10,
					pages: buildPages(response?.data?.metadata?.total / 10),
				});
			})
			.catch((error) => console.log(error));
	};

	const buildPages = (total: number) => {
		let newPages = [];
		if (total > pagination.start / 10 + 3) {
			for (var i = pagination.start / 10; i < pagination.start / 10 + 3; i++) {
				console.log("i", i);
				newPages.push(i);
			}
		}
		return newPages;
	};

	const changePagination = (num: number) => {
		console.log("num", num);
		getListOfProducts(num * 10);
	};

	return { listProducts, pagination, changePagination };
};
