import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import Container from "../atoms/Container/Container";
import useTheme from "../hooks/useTheme";

const GenericTemplate = () => {
	const { theme } = useTheme();

	return (
		<div style={{
			minHeight: '100vh'
		}} data-theme={ theme }>
			<Header />
			<Container>
				<Suspense>
					<Outlet />
				</Suspense>
			</Container>
			<Footer />
		</div>
	);
}

export default GenericTemplate;
