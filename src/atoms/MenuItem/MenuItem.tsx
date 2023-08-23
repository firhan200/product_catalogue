import { Link } from "react-router-dom";

const MenuItem = ({ label, url, indicator }: { label: string, url: string, indicator?: string }) => {
	if (typeof indicator !== 'undefined') {
		return (
			<li>
				<div className="indicator">
					{
						indicator !== "" ? (
							<span className="indicator-item badge badge-secondary">{ indicator }</span>
						) : null
					}
					<Link to={url}>{label}</Link>
				</div>
			</li>
		);
	}

	return (
		<li><Link to={url}>{label}</Link></li>
	);
}

export default MenuItem;
