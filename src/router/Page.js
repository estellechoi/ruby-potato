import React from "react";

class Page extends React.Component {
	componentDidMount() {
		console.log(this.props);
		const { location, history } = this.props;
		// redirect
		if (location.state === undefined) history.push("/");
	}

	render() {
		const { location } = this.props;
		if (location.state) return <div>{location.state.title}</div>;
		return null;
	}
}

export default Page;
