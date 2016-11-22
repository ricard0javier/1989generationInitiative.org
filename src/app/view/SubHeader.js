import React, {PropTypes} from "react";

const styles = {
  titleContainer: {
    color: '#B19D64',
    display: 'flex',
    flexDirection: 'row',
    padding: '2em',
    borderBottom: 'solid 1px #B19D64'
  },
  leftGroup: {
    textAlign: 'center',
    width: '20%'
  }
};

const SubHeaderComponent = ({pageName}) => (
  <div style={styles.titleContainer}>
    <div style={styles.leftGroup}>
      <h3>{pageName}</h3>
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

SubHeaderComponent.propTypes = {
  pageName: PropTypes.string.isRequired
};

export default SubHeaderComponent;
