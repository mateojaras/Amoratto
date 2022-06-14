import { useEffect, useState } from "react";
import HamperService from "../../../services/apialegra/HamperService";
import { buildPages, Pagination } from "../../dashboard/hooks/useDashboard";

export interface Hamper {
	name: string;
	description: string;
	images: Array<{ url: string }>;
}

export const useHamper = () => {
	const [listHampers, setListHampers] = useState<Array<Hamper>>();
	const [loading, setLoading] = useState(true);
	const [pagination, setPagination] = useState<Pagination>({
		start: 0,
		totalPages: 0,
		pages: [0],
	});

	useEffect(() => {
		getListOfHampers(pagination.start);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getListOfHampers = (start: number) => {
		setLoading(true);
		HamperService.getListOfHampers(start).then((response) => {
			setLoading(false);
			setListHampers(response?.data?.data);
			setPagination({
				start: start,
				totalPages: Math.ceil(response?.data?.metadata?.total / 10),
				pages: buildPages(
					Math.ceil(response?.data?.metadata?.total / 10),
					start
				),
			});
		});
	};

	const changePagination = (num: number) => {
		getListOfHampers(num * 10);
	};

	return {
		listHampers,
		loading,
		pagination,
		changePagination,
	};
};
