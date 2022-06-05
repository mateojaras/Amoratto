import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsBrush, BsBook } from "react-icons/bs";

interface Photo {
	photo: string;
}

interface Props {
	mainPhoto: string;
	secondPhoto: string;
	owner?: boolean;
	textWeightSlim: string;
	textWeightThick: string;
	phrase: string;
	iconOptions?: boolean;
}

export const Information = ({
	mainPhoto,
	secondPhoto,
	owner,
	textWeightSlim,
	textWeightThick,
	phrase,
	iconOptions,
}: Props) => {
	return (
		<section className="about_history">
			<div className="about_history_grid">
				<div className="about_history_photo_container">
					<MainPhoto photo={mainPhoto} className="about_history_photo">
						{(owner ? owner : false) && (
							<div className="about_photo_owner_flex">
								<div className="photo_owner">
									<img src={require("../assets/img/TatoP.png")} alt="" />
								</div>
								<div className="name_owner">
									TATIANA CARDONA, <span>FUNDADORA, AMORATTO</span>
								</div>
							</div>
						)}
					</MainPhoto>
				</div>

				<div className="about_history_text">
					<SecondPhoto
						className="about_history_text_photo"
						photo={secondPhoto}
					/>
					<div className="about_history_text_information">
						<h2>
							{" "}
							{textWeightSlim} <span> {textWeightThick}</span>
						</h2>
						<p>{phrase}</p>
						{(iconOptions ? iconOptions : false) && (
							<div className="icons_container">
								<NavLink to={"/Amoratto/Products"}>
									<div className="party_icon_redirect">
										<div className="icon_circle">
											<BsBrush />
										</div>
										<h3>Piñateria</h3>
									</div>
								</NavLink>
								<NavLink to={"/Amoratto/Products"}>
									<div className="party_icon_redirect">
										<div className="icon_circle">
											<BsBook />
										</div>
										<h3>Papeleria</h3>
									</div>
								</NavLink>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export const MainPhoto = styled.div`
	background-image: url(${({ photo }: Photo) => photo});
`;

export const SecondPhoto = styled.div`
	background-image: url(${({ photo }: Photo) => photo});
`;
