import {combineReducers} from "redux";

import teams from "./teams";
import members from "./members";

export default combineReducers({
  teams,
  members
});
