import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function BottomNavigation() {
	const { totalItem } = useCart();

	return (
		<div className="lg:hidden btm-nav z-50">
			<Link to="/">
				<svg viewBox="0 0 24 24" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
			</Link>
			<Link to="/products">
				<svg viewBox="0 0 24 24" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 17V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V17M8.28571 21C7.02335 21 6 19.9767 6 18.7143V15.2857C6 14.0233 7.02335 13 8.28571 13C9.23249 13 10 13.7675 10 14.7143V19.2857C10 20.2325 9.23249 21 8.28571 21ZM15.7143 21C16.9767 21 18 19.9767 18 18.7143V15.2857C18 14.0233 16.9767 13 15.7143 13C14.7675 13 14 13.7675 14 14.7143V19.2857C14 20.2325 14.7675 21 15.7143 21Z" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
			</Link>
			<Link to="/cart">
				<div className="indicator">
					<svg viewBox="0 0 24 24" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
					<span className="indicator-item badge badge-secondary">{totalItem}</span>
				</div>
			</Link>
		</div>
	);
}
