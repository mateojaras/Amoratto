/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "../../../pages/dashboard/components/DashBoard";
import { setupServer } from "msw/node";

import productsInventory from "../../data/productsInventory.json";
import categories from "../../data/categories.json";

const server = setupServer(
	rest.get("/undefineditems", (req, res, ctx) => {
		return res(ctx.json(productsInventory));
	}),
	rest.get("http://localhost/undefineditem-categories", (req, res, ctx) => {
		return res(ctx.json(categories));
	})
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("<Header />", () => {
	beforeEach(async () => {
		await waitFor(() => {
			// eslint-disable-next-line testing-library/no-render-in-setup
			render(
				<BrowserRouter>
					<DashBoard />
				</BrowserRouter>
			);
		});
	});

	test("render header", async () => {
		// eslint-disable-next-line testing-library/prefer-find-by
		await waitFor(() => screen.getByText("Álbum para fotos"));
	});
});
