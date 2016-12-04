import React from "react";

import SubHeader from './subHeader';

const styles = {
  container: {
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  textContainer: {
    color: '#02274A',
    padding: '4em'
  }
};

const BlogComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="BLOG"/>
    <div style={styles.textContainer}>
      <p>
        The Initiative has partnered up with the European newsite, Euractiv, to make of the voices of young Europeans heard across the continent and beyond. For over 15 years Euractiv has provided a platform for European news and policy debates in 12 different languages, and has been a great medium through which 89ers can express fresh and well-informed opinions on some of Europe’s most pressing issues. Since partnering with Euractiv last year, the Initiative has published articles on topics ranging from redefining European neighbourhood policy to the looming Brexit question, with a number of blog posts being made ‘Editor’s Choice’. A full list of the Initiatives blog posts can be found at <a target="_blank" href="https://89ers.blogactiv.eu/category/euractiv-com/">https://89ers.blogactiv.eu/category/euractiv-com/</a>.
      </p>
    </div>
  </div>
);

export default BlogComponent;
