import React from "react";
import SideNav from "./SideNav.jsx";
import Overlay from "./Overlay.jsx";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavActive: false,
			isOverlayActive: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavActive: !this.state.isNavActive,
			isOverlayActive: !this.state.isOverlayActive
		});
	}

	render() {
		return <main className="container">
			<SideNav isActive={this.state.isNavActive} />
			<Overlay isActive={this.state.isOverlayActive} onClick={this.toggleNav} />
			<button className="navToggler" onClick={this.toggleNav}>Toggle nav</button>
		</main>
	}
}