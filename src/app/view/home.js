import React from "react";

import SubHeaderComponent from './subHeader';
import Donate from './donate';

const styles = {
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
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-end",
    textAlign: "right",
    backgroundImage: "url(images/inspiring_image.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    width: "100%",
    height: "600px"
  }
};

const HomeComponent = () => (
  <div>
    <SubHeaderComponent pageName="HOME"/>
    <div style={styles.background}>
      <Donate/>
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
