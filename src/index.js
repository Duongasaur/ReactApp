import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import HeroPage from "./components/HeroPage";
import reducers from "./reducers/";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Goodbye extends React.Component {
	render() { return <div>sup monica</div>;}
}


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/character/:characterID" component={HeroPage} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
