import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HeroComponent from "./Hero";
import SubHeader from "../components/headers/SubHeader.js";
import { fetchHerosList } from "../actions/MarvelAction";

class HeroList extends Component {

	constructor(props) {
		super(props);
		this.changePageCallBack = this.changePageCallBack.bind(this);
	}

	componentDidMount() {
		this.props.fetchHerosList();
	}

	changePageCallBack(backOrForwards) {
		let offset = this.props.offset;
		if(backOrForwards === "backward") {
			offset -= 20;
		}
		else if(backOrForwards == "forward") {
			offset += 20;
		}
		this.props.fetchHerosList(offset);
	}

	render () {
		const {
			heroes: heroes,
			count: count,
			offset: offset
		} = this.props;
		
		const pageLimit = Math.floor(count/20);
		const page = Math.floor(offset/20);

		return (
		<div>
			<SubHeader 
			page={page}
			pageLimit={pageLimit}
			changePageCallBack={this.changePageCallBack}
			/>
			<div className="hero-list">
				{
					heroes.map((hero) => {
						return (
							<HeroComponent 
							key={hero.id} 
							hero={hero}
							/>
						);
					})
				} 
			</div>
		</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchHerosList}, dispatch);
}

function mapStateToProps(state) {
	return { 
		heroes: state.heroes.list,
		count: state.heroes.count,
		offset: state.heroes.offset
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
