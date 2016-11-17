import React, {PropTypes} from "react";
import Article from "./article";

const Articles = ({articles}) => (
  <div>
    {articles.map((articleContent, index) => (
      <Article key={index} content={articleContent}/>
    ))}
  </div>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
