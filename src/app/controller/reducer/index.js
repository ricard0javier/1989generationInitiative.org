import {combineReducers} from "redux";
import authReducer from "./auth-reducer";
import articlesReducer from "./articles-reducer";

const reducers = combineReducers({
  auth: authReducer,
  articles: articlesReducer
});

export default reducers;
