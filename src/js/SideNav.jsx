import React from "react";

export default class Layout extends React.Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav-list">

					<li className="nav-groupLabel">Správa</li>
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--contacts ion-ios-people" aria-hidden="true"></span>
							Kontakty
						</a>
					</li>
					
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--sell ion-arrow-left-c" aria-hidden="true"></span>
							Prodej
						</a>
					</li>
					
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--buy ion-arrow-right-c" aria-hidden="true"></span>
							Nákup
						</a>
					</li>

					<li className="nav-groupLabel">Podnik</li>
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--bank ion-card" aria-hidden="true"></span>
							Banka
						</a>
					</li>
					
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--reports ion-arrow-graph-up-right" aria-hidden="true"></span>
							Reporty
						</a>
					</li>
					
					<li>
						<a href="#" className="nav-link">
							<span className="nav-icon nav-icon--products ion-cube" aria-hidden="true"></span>
							Produkty
						</a>
					</li>

					<li className="nav-groupLabel">Ostatní</li>
					<li>
						<a href="#" className="nav-link">Návody a FAQ</a>
					</li>
					
					<li>
						<a href="#" className="nav-link">Ke stažení</a>
					</li>
				</ul>
			</nav>
		);
	}
}