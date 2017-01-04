import {connect} from "react-redux";
import EditTeamsComponent from "../../view/EditTeams";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const EditTeamsContainer = connect(mapStateToProps)(EditTeamsComponent);

export default EditTeamsContainer;
