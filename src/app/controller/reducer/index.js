import {combineReducers} from "redux";

import whoWeAreReducer from "./whoWeAreReducer";

const reducers = combineReducers({
  teams: whoWeAreReducer
});

export default reducers;
