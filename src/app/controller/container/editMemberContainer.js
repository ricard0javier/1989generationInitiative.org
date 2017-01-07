import {connect} from "react-redux";

import EditMemberModalComponent from "../../view/EditMember";
import {editStopMembers, saveMembers} from "../modules/members";

const getTeamsArray = teams => {
  const teamsArray = [];
  teams.forEach(team => teamsArray.push(team));
  return teamsArray;
};

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    showForm: state.members.showForm,
    form: state.members.form,
    teams: getTeamsArray(state.teams.data)
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    editStopMembers: () => {
      dispatch(editStopMembers());
    },
    saveMembers: member => {
      dispatch(saveMembers(member));
    }
  };
};

const EditMemberContainer = connect(mapStateToProps, mapDispatchToProps)(EditMemberModalComponent);

export default EditMemberContainer;
