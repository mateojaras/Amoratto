import { Spinner } from "../../dashboard/components/loading/Spinner";
import { PaginationSarahs } from "../../dashboard/components/pagination/PaginationSarahs";
import { useHamper } from "../hook/useHamper";
import { CardHamper } from "./cards/CardHamper";

const Hamper = () => {
	const { listHampers, loading, pagination, changePagination } = useHamper();
	return (
		<div className="hamper_container container">
			<h2> Nuestras Anchetas</h2>
			{!loading && (
				<div className="dashboard_products_grid">
					{listHampers?.map((hamper, index) => (
						<CardHamper
							key={index}
							name={hamper?.name}
							description={hamper?.description}
							image={hamper?.images ? hamper?.images[0]?.url : ""}
						/>
					))}
				</div>
			)}
			{loading && (
				<div className="spinner_container">
					<Spinner />
				</div>
			)}
			{!loading && (
				<PaginationSarahs
					pagination={pagination}
					changePagination={changePagination}
				/>
			)}
		</div>
	);
};

export default Hamper;
