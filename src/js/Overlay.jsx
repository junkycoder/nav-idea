import React from "react";

export default class Overlay extends React.Component {
	render() {
		const { isActive } = this.props;
		return <div 
			className={isActive ? "overlay is-active" : "overlay"}
			onClick={this.props.onClick}>
		</div>
	}
}