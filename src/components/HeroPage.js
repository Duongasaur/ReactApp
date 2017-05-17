import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./../App.css";

import MarvelousHeader from "./headers/Header.js";
import { fetchHero } from "../actions/MarvelAction";


class HeroPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const heroID = this.props.match.params.characterID;
		this.props.fetchHero(heroID);
	}

	render() {
		const {
			heroesDetails: heroesDetails
		} = this.props;
	
		console.log(heroesDetails);

		return (
      <div className="App">
		<MarvelousHeader />
		<div className="main-content">
			<div className="sub-header">
				<Link to="/" className="link-Back"> 
					Back
				</Link>
			</div>
			<div className="hero-details-wrap">
				<div className="hero-details-name">
					{heroesDetails.name}
				</div>
				<div className="hero-picture-main-wrap">
					<img className="hero-picture-main" src={heroesDetails.thumbnail.path + "." + heroesDetails.thumbnail.extension} />
				</div>
				<div className="hero-description-main">
					{heroesDetails.description}
				</div>
			</div>
		</div>
      </div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchHero}, dispatch);
}

function mapStateToProps(state) {
	return { 
		heroesDetails: state.singleHero.heroesDetails,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);