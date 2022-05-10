import { CardSarahs } from "./cards/CardSarahs";
import { FilterSarahs } from "./filters/FilterSarahs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDashboard } from "../hooks/useDashboard";

const DashBoard = () => {
	const { listProducts, pagination, changePagination } = useDashboard();
	return (
		<div className="dashboard_container">
			<div className="dashboard_grid">
				<div className="dashboard_filter">
					<FilterSarahs />
				</div>
				<div className="dashboard_products">
					<div className="dashboard_container_products">
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
						<div className="pages_container">
							{pagination.pages[0] > 0 && (
								<a
									href="##"
									onClick={() => changePagination(pagination.pages[0] - 1)}
								>
									<AiOutlineLeft />
								</a>
							)}

							{pagination.pages?.map((num) => (
								<a key={num} href="##" onClick={() => changePagination(num)}>
									{num + 1}
								</a>
							))}
							{pagination.pages[3] !== pagination.totalPages && (
								<a
									href="##"
									onClick={() => changePagination(pagination.pages[0] + 1)}
								>
									<AiOutlineRight />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
