import React from "react";
import {Router, Route, browserHistory, IndexRedirect, Redirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import HomeComponent from "./view/Home";
import CollaboratorsComponent from "./view/Collaborators";
import EventsComponent from "./view/Events";
import AboutContainer from "./controller/container/aboutContainer";
import EventComponent from "./view/Event";
import reducer from "./controller/modules/reducer";
import TemplateContainer from "./controller/container/templateContainer";
import EditTeamsContainer from "./controller/container/editTeamsContainer";
import {handlePageView} from './utils/analytics';
import {loadTeams} from './controller/modules/teams';

const store = createStore(
  reducer,
  applyMiddleware(thunk));

const handleLoadTeams = () => store.dispatch(loadTeams());
/**
* Configures the application with:
* - Redux (<Provider/>)
* - React Router (<Router/>)
*/
const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={handlePageView}>
      <Route path="/" component={TemplateContainer}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={HomeComponent}/>
        <Route path="collaborators" component={CollaboratorsComponent}/>
        <Route path="events" component={EventsComponent}/>
        <Route path="about" component={AboutContainer} onEnter={handleLoadTeams}/>
        <Route path="event" component={EventComponent}/>
        <Route path="admin" component={EditTeamsContainer} onEnter={handleLoadTeams}/>
        <Redirect path="*" to="/"/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
