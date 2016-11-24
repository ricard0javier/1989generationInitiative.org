import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore} from "redux";
import HomeComponent from "./view/home";
import CollaboratorsComponent from "./view/collaborators";
import EventsComponent from "./view/events";
import WhoWeAreComponent from "./view/who_we_are";
import reducers from "./controller/reducer";
import TilesContainer from "./controller/container/tiles-container";

const store = createStore(reducers);

/**
* Configures the application with:
* - Redux (<Provider/>)
* - React Router (<Router/>)
*/
const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TilesContainer}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={HomeComponent}/>
        <Route path="collaborators" component={CollaboratorsComponent}/>
        <Route path="events" component={EventsComponent}/>
        <Route path="who_we_are" component={WhoWeAreComponent}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
