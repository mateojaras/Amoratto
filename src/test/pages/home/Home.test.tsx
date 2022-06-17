/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Home from "../../../pages/home/components/Home";

describe("<Header />", () => {
	beforeEach(async () => {
		await waitFor(() => {
			// eslint-disable-next-line testing-library/no-render-in-setup
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			);
		});
	});

	test("render header", async () => {
		expect(screen.getByText("VEN Y CONOCE")).toBeInTheDocument();
	});
});
