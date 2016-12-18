import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import HomeComponent from "./view/home";
import CollaboratorsComponent from "./view/collaborators";
import EventsComponent from "./view/events";
import WhoWeAreContainer from "./controller/container/WhoWeAreContainer";
import ChaptersComponent from "./view/chapters";
import ContactComponent from "./view/contact";
import EventComponent from "./view/event";
import reducers from "./controller/reducer";
import TilesContainer from "./controller/container/tiles-container";
import {handlePageView} from './utils/analytis';
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
        <Route path="chapters" component={ChaptersComponent}/>
        <Route path="contact" component={ContactComponent}/>
        <Route path="event" component={EventComponent}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
