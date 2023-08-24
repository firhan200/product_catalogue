import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import Container from "../atoms/Container/Container";
import useTheme from "../hooks/useTheme";
import useNotification from "../hooks/useNotification";
import Toast from "../molecules/Toast/Toast";
import Alert from "../atoms/Alert/Alert";

const GenericTemplate = () => {
	const { theme } = useTheme();
	const { message } = useNotification();

	return (
		<div style={{
			minHeight: '100vh'
		}} data-theme={theme}>
			<Header />
			<Container>
				<Suspense>
					<Outlet />
				</Suspense>
			</Container>
			<Footer />

			<Toast>
				{
					message !== "" ? <Alert message={message}/> : null
				}
			</Toast>
		</div>
	);
}

export default GenericTemplate;
