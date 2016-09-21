import React from "react";
import SideNav from "./SideNav.jsx";

export default class Layout extends React.Component {
	render() {
		return <main className="container">
			<SideNav />
			{this.props.children}
		</main>
	}
}