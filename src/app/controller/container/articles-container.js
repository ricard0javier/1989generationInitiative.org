import {connect} from "react-redux";
import Articles from "../../view/articles";

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const ArticlesContainer = connect(mapStateToProps)(Articles);

export default ArticlesContainer;
