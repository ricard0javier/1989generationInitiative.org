import React from "react";

import SubHeaderComponent from './SubHeader';
import LinkButton from './LinkButton';
import Donate from './Donate';

const styles = {
  iconBox: {
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: "150px"
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

const icons = [
  {
    name: "Policies for People",
    url: "http://static.1989generationinitiative.org/images/icon_policies.png"
  },
  {
    name: "Solidarity",
    url: "http://static.1989generationinitiative.org/images/icon_solidarity.png"
  },
  {
    name: "Connectivity",
    url: "http://static.1989generationinitiative.org/images/icon_connectivity.png"
  },
  {
    name: "Opportunity",
    url: "http://static.1989generationinitiative.org/images/icon_opportunity.png"
  }
];

const HomeComponent = () => (
  <div>
    <SubHeaderComponent pageName="HOME"/>
    <div style={styles.background}>
      <div><span></span></div>
      <div style={styles.title}>
        <h3 className="animated-fade-in">TACKLING POPULISM:</h3>
        <h4 className="animated-fade-in-later">HOPE OVER FEAR</h4>
      </div>
      <div>
        <LinkButton href="http://facebook.com/events/1362902850410939/" text="Facebook Event" faIconClass="fa fa-facebook-square"/>
        <LinkButton href="http://static.1989generationinitiative.org/docs/Tackling_Populism__Hope_over_Fear.pdf" text="Conference Booklet"/>
      </div>
    </div>

    {/* Donation */}
    <div className="text">
      <h2>Donations</h2>
      <p>In order to cover the travel costs of experts attending the Conference and to facilitate the general logistics of the event, we are depending on your generosity. We encourage you to consider a donation within your means.</p>
      <Donate/>
    </div>

    {/* Defining icons boxes */}
    <div className="container-fluid">
      <div className="row">
        {icons.map((icon, index) => (
          <div key={index} className="col-xs-6 col-sm-3" style={styles.iconBox}>
            <div>
              <img src={icon.url}/>
            </div>
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomeComponent;
