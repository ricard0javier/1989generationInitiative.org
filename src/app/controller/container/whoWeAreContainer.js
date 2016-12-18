import {connect} from "react-redux";
import WhoWeAreComponent from "../../view/whoWeAre";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const WhoWeAreContainer = connect(mapStateToProps)(WhoWeAreComponent);

export default WhoWeAreContainer;
