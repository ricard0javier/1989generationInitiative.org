import React, {PropTypes} from "react";
import "../configuration/markedConfiguration";

/* eslint-disable react/no-danger */
const Article = ({content}) => {
  // let content = "<i class='fa fa-spinner fa-spin'></i><span> Loading...</span>";
  return (
    <div className="alpha-div" dangerouslySetInnerHTML={{__html: content}}/>
  );
};
/* eslint-enable react/no-danger */

Article.propTypes = {
  content: PropTypes.string.isRequired
};

export default Article;
