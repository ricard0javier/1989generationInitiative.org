import React from "react";

import SubHeaderComponent from './subHeader';
import LinkButton from './link_button.js';

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
    textAlign: "left",
    backgroundImage: "url(images/home_main_image.png)",
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
      <LinkButton href="http://tinyurl.com/TacklingPopulismApplication" text="Application Form"/>
      <LinkButton href="docs/Tackling_Populism__Hope_over_Fear.pdf" text="Conference Booklet"/>
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
