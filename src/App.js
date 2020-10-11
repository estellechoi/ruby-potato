import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Page from "./router/Page";
import Navigation from "./components/Navigation";

function App() {
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
