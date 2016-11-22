import React, {PropTypes} from "react";

const styles = {
  titleContainer: {
    color: '#B19D64',
    display: 'flex',
    flexDirection: 'row',
    padding: '2em'
  },
  leftGroup: {
    textAlign: 'center',
    width: '20%'
  }
};

const SubHeader = ({pageName}) => (
  <div style={styles.titleContainer}>
    <div style={styles.leftGroup}>
      <h1>{pageName}</h1>
    </div>
    <div>
      <div>
        <span>We are an open policy network committed to mobilising young Europeans;</span><br/>
        <span>or '89ers', to lead the long term regeneration of the European Project</span><br/>
        <span>through the development of innovative policy proposals.</span><br/>
      </div>
    </div>
  </div>
);

SubHeader.propTypes = {
  pageName: PropTypes.string.isRequired
};

export default SubHeader;
