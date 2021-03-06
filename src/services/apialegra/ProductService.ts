import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN || "";

let config = {
	headers: {
		Authorization: token,
	},
};
class ProductService {
	getListOfProducts(start: number) {
		return axios.get(
			`${baseURL}items/?start=${start}&limit=10&metadata=true`,
			config
		);
	}

	getListOfCategories() {
		return axios.get(`${baseURL}item-categories?start=0&limit=20`, config);
	}
}

export default new ProductService();
