import axios from "axios";

let config = {
	headers: {
		Authorization:
			"Basic bWF0ZW8uamFyYW1pbGxvcUB1ZGVhLmVkdS5jbzoxNjU4NmUyMTBiZWQ2MmRmNWI4NQ==",
	},
};
class ProductService {
	getListOfProducts() {
		return axios.get(
			"https://api.alegra.com/api/v1/items/?start=0&limit=10",
			config
		);
	}

	getListOfCategories() {
		return axios.get(
			"https://api.alegra.com/api/v1/item-categories?start=0&limit=20",
			config
		);
	}
}

export default new ProductService();
