/* init page routing */
import { lazy } from "react";
import {
	RouterProvider,
	createBrowserRouter
} from "react-router-dom";
import GenericTemplate from "./templates/GenericTemplate";

//init every pages using lazy
const homePageLazy = lazy(() => import('./pages/HomePage/HomePage'));
const productsPageLazy = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const productDetailPageLazy = lazy(() => import('./pages/ProductDetailPage/ProductDetailPage'));
const cartPageLazy = lazy(() => import('./pages/CartPage/CartPage'));

//create root router
const router = createBrowserRouter([
	{
		element: <GenericTemplate />,
		children: [
			{
				path: "/",
				Component: homePageLazy
			},
			{
				path: "/products",
				Component: productsPageLazy
			},
			{
				path: "/products/:id",
				Component: productDetailPageLazy
			},
			{
				path: "/cart",
				Component: cartPageLazy
			}
		]
	},
]);
/* init page routing */

const AppRouter = () => {
	return (
		<RouterProvider router={router}/>
	);
}

export default AppRouter;
