import {connect} from "react-redux";

import EditTeamsComponent from "../../view/EditTeams";
import {editStartMembers} from "../modules/members";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    teams: state.teams.data
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    handleEditMember: (name, description, linkedin, twitter, image) => {
      dispatch(editStartMembers(name, description, linkedin, twitter, image));
    }
  };
};

const EditTeamsContainer = connect(mapStateToProps, mapDispatchToProps)(EditTeamsComponent);

export default EditTeamsContainer;
