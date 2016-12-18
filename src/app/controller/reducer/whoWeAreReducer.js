import {RECEIVE_TEAMS} from "../action/whoWeAreActions";

const whoWeAreReducer = (state = [], action) => {
  switch (action.type) {

    case RECEIVE_TEAMS:
      return action.teams;

    default:
      return state;
  }
};

export default whoWeAreReducer;
