import Menu from "../../molecules/Menu/Menu";
import { MenuType } from "../../molecules/Menu/MenuType";
import ThemeToggle from "../../molecules/ThemeToggle/ThemeToggle";

const Header = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<Menu type={MenuType.MOBILE}/>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Catelogue</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<Menu type={MenuType.DEKSTOP}/>
			</div>
			<div className="navbar-end">
				<ThemeToggle />
			</div>
		</div>
	);
}

export default Header;
