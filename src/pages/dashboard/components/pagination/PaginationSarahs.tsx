import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Pagination as Props } from "../../hooks/useDashboard";

interface Pagination {
	pagination: Props;
	changePagination: (page: number) => void;
}

export const PaginationSarahs = ({
	pagination,
	changePagination,
}: Pagination) => {
	return (
		<div className="pages_container">
			{pagination.pages[0] > 0 && (
				<a href="##" onClick={() => changePagination(pagination.pages[0] - 1)}>
					<AiOutlineLeft />
				</a>
			)}

			{pagination.pages?.map((num) => (
				<a key={num} href="##" onClick={() => changePagination(num)}>
					{num + 1}
				</a>
			))}
			{pagination.pages[2] && pagination.pages[2] !== pagination.totalPages && (
				<a href="##" onClick={() => changePagination(pagination.pages[0] + 1)}>
					<AiOutlineRight />
				</a>
			)}
		</div>
	);
};
