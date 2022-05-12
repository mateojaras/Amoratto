import { useEffect, useState } from "react";
import ProductService from "../../../services/apialegra/ProductService";

interface Product {
	itemCategory: { name: string };
	name: string;
	price: Array<{ price: string }>;
	images: Array<{ url: string }>;
}

export interface Pagination {
	start: number;
	totalPages: number;
	pages: Array<number>;
}

export const useDashboard = () => {
	const [listProducts, setlistProducts] = useState<Array<Product>>();
	const [loading, setLoading] = useState(true);
	const [textFilter, setTextFilter] = useState<string>();
	const [pagination, setPagination] = useState<Pagination>({
		start: 0,
		totalPages: 0,
		pages: [0],
	});
	useEffect(() => {
		getListOfProducts(pagination.start);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getListOfProducts = (start: number, text?: string) => {
		setLoading(true);
		ProductService.getListOfProducts(start, text ? text : "")
			.then((response) => {
				setLoading(false);
				setlistProducts(response?.data?.data);
				setPagination({
					start: start,
					totalPages: response?.data?.metadata?.total / 10,
					pages: buildPages(response?.data?.metadata?.total / 10, start),
				});
			})
			.catch((error) => console.log(error));
	};

	const buildPages = (total: number, start: number) => {
		let newPages = [];
		const startPage = start / 10;
		if (total > startPage + 3) {
			for (var i = startPage; i < startPage + 3; i++) {
				newPages.push(i);
			}
		}
		return newPages;
	};

	const changePagination = (num: number) => {
		getListOfProducts(num * 10);
	};

	const searchByText = () => {
		getListOfProducts(pagination.start, textFilter);
	};

	return {
		listProducts,
		pagination,
		loading,
		changePagination,
		setTextFilter,
		searchByText,
	};
};
