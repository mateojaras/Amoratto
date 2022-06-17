/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../layout/Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
	});

	test("render header", () => {
		expect(screen.getByText("home")).toBeInTheDocument();
	});

	test("click to home", () => {
		const home = screen.getByText("home");
		fireEvent.click(home);
	});
});
