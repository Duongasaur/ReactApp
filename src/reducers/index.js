import { combineReducers } from "redux";
import { heroesReducer, singleHeroesReducer } from "./HeroesReducer";

const rootReducer = combineReducers({
	heroes: heroesReducer,
	singleHero: singleHeroesReducer
});

export default rootReducer;
