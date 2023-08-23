import { MenuType } from "./MenuType";
import MenuItem from "../../atoms/MenuItem/MenuItem";
import useCart from "../../hooks/useCart";

type MenuProps = {
	type: MenuType
}

const Menu = ({ type }: MenuProps) => {
	const { totalItem } = useCart();

	if (type == MenuType.MOBILE) {
		return (
			<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<MenuItem label="Home" url="/"/> 
				<MenuItem label="Products" url="/products"/> 
				<MenuItem label="Cart" url="/cart" indicator={ totalItem }/> 
			</ul>
		);
	}

	if (type == MenuType.DEKSTOP) {
		return (
			<ul className="menu menu-horizontal px-1">
				<MenuItem label="Home" url="/"/> 
				<MenuItem label="Products" url="/products"/> 
				<MenuItem label="Cart" url="/cart" indicator={ totalItem }/> 
			</ul>
		);
	}
}

export default Menu;
