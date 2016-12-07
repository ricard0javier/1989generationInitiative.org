import React from "react";

import {handleDonationClick} from '../utils/analytis';

const Donate = () => (
  <form action="https://www.paypal.com/cgi-bin/webscr" onSubmit={handleDonationClick} method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick"/>
    <input type="hidden" name="hosted_button_id" value="G7L4GW53UFHA2"/>
    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal â€“ The safer, easier way to pay online!"/>
  </form>
);

export default Donate;
