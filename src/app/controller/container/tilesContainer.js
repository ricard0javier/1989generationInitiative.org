import {connect} from "react-redux";
import Tiles from "../../view/Tiles";

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children
  };
};

const TemplateContainer = connect(mapStateToProps)(Tiles);

export default TemplateContainer;
