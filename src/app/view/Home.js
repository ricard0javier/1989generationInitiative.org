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
    height: "200px"
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
  }
};

const icons = [
  {
    name: "Policies for People",
    url: "http://static.1989generationinitiative.org/images/icon_policies.png",
    description: "That Europe should have as its core aim the improvement of its citizens’ lives; that this should be the driving force behind its broad directions and policies; and that the premise must transcend political ideology, party affiliation, national boundaries, professional discipline and age."
  },
  {
    name: "Solidarity",
    url: "http://static.1989generationinitiative.org/images/icon_solidarity.png",
    description: "Member states must embrace their responsibility as part of something bigger, and defend the rights and prosperity not merely of their own citizens, but of Europeans more broadly. Only this will form the basis of true European solidarity."
  },
  {
    name: "Connectivity",
    url: "http://static.1989generationinitiative.org/images/icon_connectivity.png",
    description: "In trade, education, politics, and security, connectivity should be fostered between citizens and governments, bringing out the best of our potential. Whilst Europe might design policies that promote this, these cannot be top-down, nor overbearing."
  },
  {
    name: "Opportunity",
    url: "http://static.1989generationinitiative.org/images/icon_opportunity.png",
    description: "The history of Europe is a history of great ideas and innovations. But behind each of these is a great scientist, artist or political thinker. Consistent with the notion of policies for people, is the premise that systems must be created to allow citizens to best fulfil their potential: A Europe of universal opportunity."
  }
];

const HomeComponent = () => (
  <div>
    <SubHeaderComponent pageName="HOME"/>
    <div style={styles.background}>
      <div><span></span></div>
      <div className="highlight-text">
        <h1 className="animated-fade-in">TACKLING POPULISM:</h1>
        <h4 className="animated-fade-in-later">HOPE OVER FEAR</h4>
      </div>
      <div>
        <LinkButton href="http://facebook.com/events/1362902850410939/" text="Facebook Event" faIconClass="fa fa-facebook-square"/>
        <LinkButton href="http://static.1989generationinitiative.org/docs/Tackling_Populism__Hope_over_Fear.pdf" text="Conference Booklet"/>
      </div>
    </div>

    {/* Quotes */}
    <div className="container">
      <blockquote className="blockquote-reverse">
        <p>I don’t know whether the 89ers will come together as a defining political generation, how they will act and - as important - how they will react when “stuff happens”, as stuff will. But one thing is clear: on them will depend the future of our past.</p>
        <footer><cite title="Timothy Garton Ash">Timothy Garton Ash</cite></footer>
      </blockquote>
    </div>

    {/* Tickets */}
    <div className="container-fluid poweredByEventbrite">
      <iframe
        src="//eventbrite.com/tickets-external?eid=31541121343&ref=etckt"
        frameBorder="0"
        height="300"
        width="100%"
        vSpace="0"
        hSpace="0"
        marginHeight="5"
        marginWidth="5"
        scrolling="auto"
        allowTransparency="true"
        >
      </iframe>
      <div className="signature">
        <a className="powered-by-eb" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a></div>
    </div>

    {/* Defining icons boxes */}
    <div className="container">
      <div className="row">
        {icons.map((icon, index) => (
          <div key={index} className="col-xs-12 col-sm-6" style={styles.iconBox}>
            <div>
              <img src={icon.url}/>
            </div>
            <h4>{icon.name}</h4>
            <p>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Donation */}
    <div className="container">
      <h2>Donations</h2>
      <p>In order to cover the travel costs of experts attending the Conference and to facilitate the general logistics of the event, we are depending on your generosity. We encourage you to consider a donation within your means.</p>
      <Donate/>
    </div>

  </div>
);

export default HomeComponent;
