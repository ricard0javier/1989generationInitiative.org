import React from "react";

import SubHeader from './subHeader';

const styles = {
  container: {
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  teamContainer: {
    padding: "10%"
  },
  membersContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  memberImage: {
    width: '50%',
    height: '100%'
  },
  link: {
    color: '#B19D64',
    fontSize: "1em"
  },
  memberText(memberReverse) {
    return {
      padding: "1em",
      textAlign: memberReverse ? 'right' : 'left',
      width: '50%',
      height: '100%'
    };
  },
  iconBox(memberReverse) {
    return {
      display: 'flex',
      textAlign: 'center',
      width: '50%',
      flexDirection: memberReverse ? 'row-reverse' : 'row'
    };
  }
};

const teamContainers = [
  {
    name: "Core Committee",
    members: [
      {
        name: "Michael Cottakis",
        description: "President",
        linkedin: "https://uk.linkedin.com/pub/michael-cottakis/b6/985/5b4",
        image: "images/team_member_michael_cottakis.jpg"
      },
      {
        name: "Antonios Fiala",
        description: "General Secretary",
        linkedin: "https://uk.linkedin.com/pub/antonios-fiala/85/701/453",
        image: "images/team_member_antonios_fiala.jpg"
      },
      {
        name: "Nicholas Charalambides",
        description: "VP Treasury",
        linkedin: "https://uk.linkedin.com/in/nicholascharalambides",
        image: "images/team_member_nicholas_charalambides.jpg"
      },
      {
        name: "Barbara Aubin",
        description: "Head of Content",
        linkedin: "https://www.linkedin.com/in/barbara-aubin-3302a491",
        image: "images/team_member_barbara_aubin.jpg"
      },
      {
        name: "Elena Turci",
        description: "Head of Events",
        linkedin: "https://be.linkedin.com/in/eturci/de",
        image: "images/team_member_elena_turci.jpg"
      },
      {
        name: "Martin Schmidler",
        description: "Head of Public Relations",
        linkedin: "http://www.linkedin.com/in/martin-schmidler",
        image: "images/team_member_martin_scmidler.jpg"
      },
      {
        name: "Dominik Kirchdorfer",
        description: "Head of Expansion",
        linkedin: "https://www.linkedin.com/in/dfkirchdorfer/en",
        image: "images/team_member_dominik_kirchdorfer.jpg"
      }
    ]
  }
];

const WhoWeAreComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="WHO WE ARE"/>
    <div>
      {teamContainers.map((teamContainer, teamContainerIndex) => {
        let memberReverse = false;
        return (
          <div key={teamContainerIndex} style={styles.teamContainer}>
            <h4>{teamContainer.name}</h4>
            <div style={styles.membersContainer}>
              {teamContainer.members.map((member, memberIndex) => {
                if (memberIndex % 2 === 0) {
                  memberReverse = !memberReverse;
                }
                return (
                  <div key={memberIndex} style={styles.iconBox(memberReverse)}>
                    <div style={styles.memberImage}>
                      <img src={member.image}/>
                    </div>
                    <div style={styles.memberText(memberReverse)}>
                      <h5>{member.name}</h5>
                      <p>{member.description}</p>
                      <span><a style={styles.link} target="_blank" href={member.linkedin}><i className="fa fa-linkedin-square fa-2x"/></a></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default WhoWeAreComponent;
