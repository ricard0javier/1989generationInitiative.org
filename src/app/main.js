import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ReactGA from 'react-ga';
import HomeComponent from "./view/home";
import CollaboratorsComponent from "./view/collaborators";
import EventsComponent from "./view/events";
import WhoWeAreComponent from "./view/who_we_are";
import ChaptersComponent from "./view/chapters";
import ContactComponent from "./view/contact";
import reducers from "./controller/reducer";
import TilesContainer from "./controller/container/tiles-container";

ReactGA.initialize('UA-61569536-1', {debug: false});
const store = createStore(reducers);

function logPageView() {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

/**
* Configures the application with:
* - Redux (<Provider/>)
* - React Router (<Router/>)
*/
const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={TilesContainer}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={HomeComponent}/>
        <Route path="collaborators" component={CollaboratorsComponent}/>
        <Route path="events" component={EventsComponent}/>
        <Route path="who_we_are" component={WhoWeAreComponent}/>
        <Route path="chapters" component={ChaptersComponent}/>
        <Route path="contact" component={ContactComponent}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
