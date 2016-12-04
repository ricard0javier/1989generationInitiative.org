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

const ChaptersComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="CHAPTERS"/>
    <div style={styles.textContainer}>
      <p>
        TODO
      </p>
    </div>
  </div>
);

export default ChaptersComponent;
