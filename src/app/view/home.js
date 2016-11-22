import React from "react";

import SubHeader from './subHeader';

const styles = {
  container: {
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  iconsContainer: {
    color: '#02274A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4em'
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center'
  }
};

const HomeComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="HOME"/>
    <div>
      <img src="images/inspiring_image.png" width="100%"/>
    </div>
    <div style={styles.iconsContainer}>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_policies.png"/>
        </div>
        <span>Policies for People</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_solidarity.png"/>
        </div>
        <span>Solidarity</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_connectivity.png"/>
        </div>
        <span>Connectivity</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_opportunity.png"/>
        </div>
        <span>Opportunity</span>
      </div>
    </div>
  </div>
);

export default HomeComponent;
