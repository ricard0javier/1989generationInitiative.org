import React from "react";

import {handleDonationClick} from '../utils/analytics';

const styles = {
  donate: {
    textAlign: 'center',
    padding: '5px'
  }
};
const Donate = () => (
  <div style={styles.donate}>
    <form action="https://www.paypal.com/cgi-bin/webscr" onSubmit={handleDonationClick} method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick"/>
      <input type="hidden" name="hosted_button_id" value="ZJLRDEBEP5SEC"/>
      <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal â€“ The safer, easier way to pay online!"/>
      <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
    </form>
  </div>
);

export default Donate;
