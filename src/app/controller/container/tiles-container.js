import {connect} from "react-redux";
import Tiles from "../../view/tiles";

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children
  };
};

const TilesContainer = connect(mapStateToProps)(Tiles);

export default TilesContainer;
