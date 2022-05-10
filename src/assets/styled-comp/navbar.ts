import styled from "styled-components";

interface openMenu {
	open: boolean;
}

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			fill: #009288;
			margin-right: 0.5rem;
			width: 2rem;
			height: 2rem;
		}
	}
`;

export const SubMenu = styled.div`
	padding-bottom: 0.1rem;
	border-top: 0.1rem solid #ededed;

	width: 100%;
	@media screen and (max-width: 960px) {
		position: absolute;
		top: 120px;
		left: ${({ open }: openMenu) => (open ? "0" : "-100%")};
		border-top: 0.2rem solid #009288;
		transition: 0.5s all ease;
	}
`;
