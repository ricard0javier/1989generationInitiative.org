import React from "react";
import {Router, Route, browserHistory, IndexRedirect, Redirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import HomeComponent from "./view/Home";
import CollaboratorsComponent from "./view/Collaborators";
import EventsComponent from "./view/Events";
import AboutContainer, {initialiseAbout} from "./controller/container/aboutContainer";
import EventComponent from "./view/Event";
import reducer from "./controller/modules/reducer";
import TemplateContainer from "./controller/container/templateContainer";
import {handlePageView} from './utils/analytics';

const store = createStore(
  reducer,
  applyMiddleware(thunk));

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
        <Route path="about" component={AboutContainer} onEnter={initialiseAbout(store.dispatch)}/>
        <Route path="event" component={EventComponent}/>
        <Redirect path="*" to="/"/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
