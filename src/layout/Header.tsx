import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MobileIcon, SubMenu } from "../assets/styled-comp/navbar";
import { routes } from "../routes/routes";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="anti_shadow">
			<div className="shadow_line">
				<div className="header">
					<div className="logo">
						<img
							src="	https://sarahssnacks.com/wp-content/uploads/2019/10/head-logo.png"
							alt="Logo"
						/>
						<MobileIcon onClick={() => setShowMenu(!showMenu)}>
							{showMenu ? <FaTimes /> : <FaBars />}
						</MobileIcon>
					</div>

					<SubMenu className="container" open={showMenu}>
						<nav className="nav">
							{routes.map((item, index) => {
								return (
									<NavLink key={index} to={item.to}>
										{item.name}
									</NavLink>
								);
							})}
						</nav>
					</SubMenu>
				</div>
			</div>
		</header>
	);
};
