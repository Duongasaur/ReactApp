import React, { Component } from "react";
import "./App.css";

import MarvelousHeader from "./components/headers/Header.js";
import HeroesList from "./components/HeroesList.js";

class Home extends Component {
	render() {
		return (
      <div className="App">
		<MarvelousHeader />
		<div className="main-content">
			<HeroesList />
			<p className="App-intro">
			</p>
		</div>
      </div>
		);
	}
}

export default Home;
