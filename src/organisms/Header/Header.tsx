import { Link } from "react-router-dom";
import BottomNavigation from "../../molecules/BottomNavigation/BottomNavigation";
import Menu from "../../molecules/Menu/Menu";
import { MenuType } from "../../molecules/Menu/MenuType";
import ThemeToggle from "../../molecules/ThemeToggle/ThemeToggle";

const Header = () => {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<Link to="/" className="btn btn-ghost normal-case text-xl">Catalogue</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<Menu type={MenuType.DEKSTOP}/>
				</div>
				<div className="navbar-end">
					<ThemeToggle />
				</div>
			</div>

			<div>
				<BottomNavigation />
			</div>
		</>
	);
}

export default Header;
