import axios from "axios";

const TEAMS_URL = "http://static.1989generationinitiative.org/data/teams.json";

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export function receiveTeams(teams) {
  return {
    type: RECEIVE_TEAMS,
    teams
  };
}

export const fetchTeams = () => dispatch => {
  axios
    .get(TEAMS_URL)
    .then(response => {
      const teams = response.data;
      dispatch(receiveTeams(teams));
    });
};
