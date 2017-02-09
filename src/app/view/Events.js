import React from "react";
import {Link} from "react-router";
import {Button} from "react-bootstrap";

import SubHeader from './SubHeader';

const styles = {
  eventsContainer: {
    color: '#02274A',
    display: 'flex',
    flexDirection: 'column'
  },
  downloadLink: {
    fontSize: "100px",
    color: 'white'
  },
  eventBoxFunc(image) {
    return {
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    };
  }
};

const events = [
  {
    landscape: 'http://static.1989generationinitiative.org/images/landscape_brussels.png',
    title: "Brussels 2016",
    link: "http://static.1989generationinitiative.org/docs/2016_Declaration.pdf",
    text: [
      'Our second major event, 89ers. Writing the Next Chapter, was held at the European Parliament in Brussels in April 2016.',
      'Co-chaired with MEPs from four major Europeans Parliament parties, the 89ers presented eight finalised policy proposals for reforming the EU, as well as new, reinvigorated, unifying vision for the Union.'
    ]
  },
  {
    landscape: 'http://static.1989generationinitiative.org/images/landscape_london.png',
    title: "London 2015",
    link: "http://facebook.com/events/1362902850410939/",
    text: [
      'The Conference on the Redefinition of the European Mission, our first major event, brought together inspiring leaders and 89ers from all over Europe at LSE in June 2015.',
      'Personalities such as Valery Giscard d\'Estaing, Neil Kinnock and Christopher Pissarides came together with 40 talented Europeans and starting laying out the backbone of our policy proposals for reforming the EU.'
    ]
  }
];

const EventsComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="EVENTS"/>
    <div style={styles.eventsContainer}>
      <div className="container-fluid">
        <div className="row" style={styles.eventBoxFunc("http://static.1989generationinitiative.org/images/landscape_london.png")}>
          <div className="col-sm-8 text">
            <h2>Launch Conference 2017</h2>
            <p>The Conference will address the theme of populism with the aim of understanding its origins and appeal. By observing where traditional ruling elites have failed, we look at ways to supplant the rhetoric of fear and hate, with one of hope. Ultimately, the Conference will offer a unique opportunity for interaction and debate between accomplished professionals, policy makers, scholars, and 89ers - young European citizens coming from all over the continent.</p>
            <Link to="/event">
              <Button bsStyle="primary">Learn more...</Button>
            </Link>
          </div>
        </div>
      </div>
      {events.map((event, index) => (
        <div className="container-fluid" key={index}>
          <div className="row" style={styles.eventBoxFunc(event.landscape)}>
            <div className="col-sm-8 text">
              <h2>{event.title}</h2>
              {event.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="col-sm-4">
              <a style={styles.downloadLink} target="_blank" href={event.link}><i className="fa fa-cloud-download"/></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EventsComponent;
