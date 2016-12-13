import React from "react";

import SubHeaderComponent from './subHeader';
import LinkButton from './link_button.js';

const styles = {
  iconsContainer: {
    color: '#02274A',
    display: 'flex',
    flexWrap: 'wrap'
  },
  iconGroup: {
    flexBasis: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  iconBox: {
    flexBasis: '50%',
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    textAlign: "left",
    backgroundImage: "url(http://static.1989generationinitiative.org/images/home_main_image.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    width: "100%",
    height: "600px",
    padding: "10px"
  },
  title: {
    color: "#B19D64"
  }
};

const HomeComponent = () => (
  <div>
    <SubHeaderComponent pageName="HOME"/>
    <div style={styles.background}>
      <div><span></span></div>
      <div style={styles.title}>
        <h3>
          TACKLING POPULISM:<br/>
          HOPE OVER FEAR
        </h3>
      </div>
      <div>
        <LinkButton href="http://tinyurl.com/TacklingPopulismApplication" text="Application Form"/>
        <LinkButton href="http://static.1989generationinitiative.org/docs/Tackling_Populism__Hope_over_Fear.pdf" text="Conference Booklet"/>
      </div>
    </div>
    <div style={styles.iconsContainer}>
      <div style={styles.iconGroup}>
        <div style={styles.iconBox}>
          <div>
            <img src="http://static.1989generationinitiative.org/images/icon_policies.png"/>
          </div>
          <span>Policies for People</span>
        </div>
        <div style={styles.iconBox}>
          <div>
            <img src="http://static.1989generationinitiative.org/images/icon_solidarity.png"/>
          </div>
          <span>Solidarity</span>
        </div>
      </div>
      <div style={styles.iconGroup}>
        <div style={styles.iconBox}>
          <div>
            <img src="http://static.1989generationinitiative.org/images/icon_connectivity.png"/>
          </div>
          <span>Connectivity</span>
        </div>
        <div style={styles.iconBox}>
          <div>
            <img src="http://static.1989generationinitiative.org/images/icon_opportunity.png"/>
          </div>
          <span>Opportunity</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomeComponent;
