import {combineReducers} from "redux";

import teams from "./teams";
import members from "./members";
import auth from "./auth";

export default combineReducers({
  teams,
  members,
  auth
});
