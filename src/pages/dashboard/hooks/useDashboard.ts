import { useEffect, useState } from "react";
import ProductService from "../../../services/apialegra/ProductService";

export interface Product {
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

export const buildPages = (total: number, start: number) => {
	let newPages = [];
	const startPage = start / 10;
	if (total > startPage + 3) {
		for (var i = startPage; i < startPage + 3; i++) {
			newPages.push(i);
		}
	} else if (total === 1) {
		newPages.push(0);
	} else if (total === 2) {
		newPages.push(0);
		newPages.push(1);
	} else if (total === 3) {
		newPages.push(0);
		newPages.push(1);
		newPages.push(2);
	}
	return newPages;
};

export const useDashboard = () => {
	const [listProducts, setListProducts] = useState<Array<Product>>();
	const [loading, setLoading] = useState(true);
	const [textFilter, setTextFilter] = useState<string>();
	const [categoryFilter, setCategoryFilter] = useState<string>();
	const [pagination, setPagination] = useState<Pagination>({
		start: 0,
		totalPages: 0,
		pages: [0],
	});
	useEffect(() => {
		getListOfProducts(pagination.start);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getListOfProducts = (
		start: number,
		text?: string,
		categoryId?: string
	) => {
		setLoading(true);
		ProductService.getListOfProducts(
			start,
			text ? text : "",
			categoryId ? categoryId : ""
		)
			.then((response) => {
				setLoading(false);
				setListProducts(response?.data?.data);
				setPagination({
					start: start,
					totalPages: Math.ceil(response?.data?.metadata?.total / 10),
					pages: buildPages(
						Math.ceil(response?.data?.metadata?.total / 10),
						start
					),
				});
			})
			.catch((error) => console.log(error));
	};

	const changePagination = (num: number) => {
		getListOfProducts(num * 10, textFilter, categoryFilter);
	};

	const searchByText = () => {
		getListOfProducts(pagination.start, textFilter, categoryFilter);
	};

	const searchByCategory = (categoryId: string) => {
		getListOfProducts(0, textFilter, categoryId);
		setCategoryFilter(categoryId);
	};

	return {
		listProducts,
		pagination,
		loading,
		changePagination,
		setTextFilter,
		searchByText,
		searchByCategory,
	};
};
