import { Link } from "react-router-dom";

const MenuItem = ({ label, url }: { label: string, url: string }) => {
	return (
		<li><Link to={url}>{ label }</Link></li>
	);
}

export default MenuItem;
