import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN || "";

let config = {
	headers: {
		Authorization: token,
	},
};
class HamperService {
	getListOfHampers(start: number) {
		return axios.get(
			`${baseURL}items/?start=${start}&limit=10&metadata=true&inventariable=false`,
			config
		);
	}
}

export default new HamperService();
