/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../layout/Footer";

describe("<Header />", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		);
	});

	test("render header", () => {
		expect(screen.getByText("3105450117")).toBeInTheDocument();
	});
});
