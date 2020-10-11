import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ menu, isSpecial }) {
	return (
		<div>
			{menu.map((item) => (
				<Link to={item.path}>
					{isSpecial && <span>*</span>}
					{item.name}
				</Link>
			))}
		</div>
	);
}

Navigation.defaultProps = {
	menu: [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Page",
			path: "/page/0",
		},
	],
};

export default Navigation;
