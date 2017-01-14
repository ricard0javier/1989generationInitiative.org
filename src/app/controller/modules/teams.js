import axios from "axios";

// Actions
const LOAD = 'app/teams/LOAD';
const LOAD_SUCCESS = 'app/teams/LOAD_SUCCESS';
// const LOAD_FAIL = 'app/teams/LOAD_FAIL';
// const EDIT_START = 'app/teams/EDIT_START';
// const EDIT_STOP = 'app/teams/EDIT_STOP';
// const SAVE = 'app/teams/SAVE';
// const SAVE_SUCCESS = 'app/teams/SAVE_SUCCESS';
// const SAVE_FAIL = 'app/teams/SAVE_FAIL';
// const DELETE = 'app/teams/DELETE';
// const DELETE_SUCCESS = 'app/teams/DELETE_SUCCESS';
// const DELETE_FAIL = 'app/teams/DELETE_FAIL';

// Reducers
const initialState = {
  data: new Map(),
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD:
      return {...state, isLoading: true};

    case LOAD_SUCCESS:
      return {...state, isLoading: false, data: action.data};

    default:
      return state;
  }
};

// Action Creators
const TEAMS_URL = "http://static.1989generationinitiative.org/data/teams_v2.json";

export const loadTeams = () => dispatch => {
  axios
    .get(TEAMS_URL)
    .then(response => {
      const teams = new Map();
      response.data.map(value => teams.set(value.id, value));
      dispatch(loadSuccessTeams(teams));
    });
  return {
    type: LOAD
  };
};

export function loadSuccessTeams(teams) {
  return {
    type: LOAD_SUCCESS,
    data: teams
  };
}

export default reducer;
