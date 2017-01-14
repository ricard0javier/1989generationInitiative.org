import {connect} from "react-redux";
import {createSelector} from "reselect";

import AboutComponent from "../../view/About";
import {editStartMembers, loadMembers} from "../modules/members";
import {loadTeams} from "../modules/teams";

let isAboutInitialised = false;
export const initialiseAbout = dispatch => {
  if (isAboutInitialised) {
    return;
  }
  isAboutInitialised = true;
  dispatch(loadTeams());
  dispatch(loadMembers());
};

const teamsDataSelector = state => state.teams.data;
const membersDataSelector = state => state.members.data;

const nestedTeamsSelector = createSelector(
  teamsDataSelector,
  membersDataSelector,
  (teams, members) => {
    const teamsWithMembers = [];
    teams.forEach(team => {
      const teamMembers = [];
      members.forEach(member => {
        if (member.teamId === team.id) {
          teamMembers.push({...member});
        }
      });
      teamsWithMembers.push({...team, members: teamMembers});
    });
    return teamsWithMembers;
  }
);

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    teams: nestedTeamsSelector(state),
    isLoggedIn: state.auth.tokenId !== ""
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    handleEditMember: (id, name, description, linkedin, teamId, twitter, image) => {
      dispatch(editStartMembers(id, name, description, linkedin, teamId, twitter, image));
    }
  };
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(AboutComponent);

export default AboutContainer;
