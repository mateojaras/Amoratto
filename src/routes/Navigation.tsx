import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../layout/Header";
import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<Header />
				<div className="relleno" />
				<Routes>
					{routes.map((item) => {
						return (
							<Route
								key={item.to}
								path={item.path}
								element={<item.Component />}
							/>
						);
					})}
					<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};
