/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import About from "../../../pages/about/components/About";

describe("<Header />", () => {
	beforeEach(async () => {
		await waitFor(() => {
			// eslint-disable-next-line testing-library/no-render-in-setup
			render(
				<BrowserRouter>
					<About />
				</BrowserRouter>
			);
		});
	});

	test("render header", async () => {
		expect(screen.getByText("Nuestra historia")).toBeInTheDocument();
	});
});
