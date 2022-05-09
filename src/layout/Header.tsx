import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { MobileIcon, SubMenu } from "../assets/styled-comp/navbar";

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
							<FaBars />
						</MobileIcon>
					</div>

					<SubMenu className="container" open={showMenu}>
						<nav className="nav">
							<a href="##">productos</a>
							<a href="##">Nosotros</a>
							<a href="##">Home</a>
						</nav>
					</SubMenu>
				</div>
			</div>
		</header>
	);
};
