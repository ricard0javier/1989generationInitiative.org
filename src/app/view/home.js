import React from "react";

import SubHeaderComponent from './subHeader';
import {handleDonationClick} from '../utils/analytis';

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
      <form action="https://www.paypal.com/cgi-bin/webscr" onSubmit={handleDonationClick} method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="G7L4GW53UFHA2"/>
        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal â€“ The safer, easier way to pay online!"/>
      </form>
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
