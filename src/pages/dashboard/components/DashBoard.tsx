import { CardSarahs } from "./cards/CardSarahs";
import { FilterSarahs } from "./filters/FilterSarahs";

import { useDashboard } from "../hooks/useDashboard";
import { PaginationSarahs } from "./pagination/PaginationSarahs";
import { Spinner } from "./loading/Spinner";

const DashBoard = () => {
	const {
		listProducts,
		pagination,
		loading,
		changePagination,
		setTextFilter,
		searchByText,
		searchByCategory,
	} = useDashboard();
	return (
		<div className="dashboard_container">
			<div className="dashboard_grid">
				<div className="dashboard_filter">
					<FilterSarahs
						setTextFilter={setTextFilter}
						searchByText={searchByText}
						searchByCategory={searchByCategory}
					/>
				</div>
				<div className="dashboard_products">
					<div className="dashboard_container_products">
						{!loading && (
							<div className="dashboard_products_grid">
								{listProducts?.map((product, index) => (
									<CardSarahs
										key={index}
										categories={product?.itemCategory?.name}
										name={product?.name}
										price={product?.price[0]?.price}
										image={product?.images ? product?.images[0]?.url : ""}
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
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
