import { useEffect, useState } from "react";
import HamperService from "../../../services/apialegra/HamperService";

export interface Hamper {
	name: string;
	description: string;
	images: Array<{ url: string }>;
}

export const useHamper = () => {
	const [listHampers, setListHampers] = useState<Array<Hamper>>();

	useEffect(() => {
		HamperService.getListOfHampers(0).then((response) => {
			setListHampers(response?.data?.data);
			console.log(response);
		});
	}, []);

	return {
		listHampers,
	};
};
