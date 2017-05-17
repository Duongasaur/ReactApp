import { FETCH_HEROS_DATA, FETCH_SINGLE_HERO_DATA } from "../actions/MarvelAction";

const initialListState = {
	list: [],
	count: 0
};

const initialListStateHeroData = {
	heroesDetails: {
		thumbnail: {
			path: "",
			extension: ""
		}
	}
};

export function heroesReducer(state = initialListState, action) { 
	switch (action.type) {
	case FETCH_HEROS_DATA:
		return { 
			...state, 
			...{
				list: action.payload.data.data.results,
				count: action.payload.data.data.total,
				offset: action.payload.data.data.offset
			}	
		};
	}	
	return state;
}

export function singleHeroesReducer(state = initialListStateHeroData, action) { 
	switch (action.type) {
	case FETCH_SINGLE_HERO_DATA:
		return { 
			...state, 
			...{
				heroesDetails: action.payload.data.data.results[0]
			}	
		};
	}	
	return state;
}
