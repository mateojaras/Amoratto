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

const HomeComponent = lazy(() => import("../pages/home/components/Home"));

export const routes: Route[] = [
	{
		to: "/Amoratto/",
		path: "/Amoratto/",
		Component: HomeComponent,
		name: "home",
	},
	{
		to: "/Amoratto/Products",
		path: "/Amoratto/Products",
		Component: DashBoardComponent,
		name: "productos",
	},
];
