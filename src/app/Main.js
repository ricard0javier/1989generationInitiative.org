import React from "react";
import {Router, Route, browserHistory, IndexRedirect, Redirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import HomeComponent from "./view/home";
import CollaboratorsComponent from "./view/Collaborators";
import EventsComponent from "./view/Events";
import WhoWeAreContainer from "./controller/container/whoWeAreContainer";
import EventComponent from "./view/Event";
import reducers from "./controller/reducer";
import TilesContainer from "./controller/container/tiles-container";
import {handlePageView} from './utils/analytics';
import {fetchTeams} from './controller/action/whoWeAreActions';

const store = createStore(
  reducers,
  applyMiddleware(thunk));

const handleFetchTeams = () => store.dispatch(fetchTeams());
/**
* Configures the application with:
* - Redux (<Provider/>)
* - React Router (<Router/>)
*/
const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={handlePageView}>
      <Route path="/" component={TilesContainer}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={HomeComponent}/>
        <Route path="collaborators" component={CollaboratorsComponent}/>
        <Route path="events" component={EventsComponent}/>
        <Route path="who_we_are" component={WhoWeAreContainer} onEnter={handleFetchTeams}/>
        <Route path="event" component={EventComponent}/>
        <Redirect path="*" to="/"/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
