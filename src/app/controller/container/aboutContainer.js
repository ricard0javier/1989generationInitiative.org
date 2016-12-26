import {connect} from "react-redux";
import AboutComponent from "../../view/About";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const AboutContainer = connect(mapStateToProps)(AboutComponent);

export default AboutContainer;
