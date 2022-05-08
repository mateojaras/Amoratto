import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const DashBoardComponent = lazy(
	() => import("../pages/dashboard/components/DashBoard")
);

export const routes: Route[] = [
	{
		to: "/Amoratto/",
		path: "/Amoratto/",
		Component: DashBoardComponent,
		name: "dashboard",
	},
];
