import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Page from "./router/Page";
import Navigation from "./components/Navigation";

function App() {
	// const pages = [
	// 	{
	// 		id: 1,
	// 		name: "Github",
	// 		url: "https://github.com/estellechoi",
	// 	},
	// ];

	// // When manipulating some variables, without re-rendering, just use useRef instead of useState.
	// const nextId = useRef(4);

	// const onCreate = () => {
	// 	console.log(nextId.current); // 4
	// 	nextId.current += 1;
	// };

	return (
		<>
			<HashRouter>
				{/* ={true} 생략가능 */}
				<Navigation isSpecial />
				<Route path="/" exact={true} component={Home} />
				<Route path="/page/:id" component={Page} />
			</HashRouter>

			<footer></footer>
		</>
	);
}

export default App;
