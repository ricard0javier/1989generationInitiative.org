import React from "react";
import SubHeader from "./subHeader";

const styles = {
  teamContainer: {
    paddingLeft: "4em",
    paddingRight: "4em"
  },
  membersContainer: {
    color: '#B19D64',
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
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Adela Alexandra Iacobov",
        description: "Coordinator, Politics & Institutions"
      },
      {
        name: "Adele Marsullo",
        description: "Content Officer, Politics & Institutions"
      },
      {
        name: "François Barres",
        description: "Content Officer, Politics & Institutions"
      },
      {
        name: "Alessandro Giovanni",
        description: "Content Officer, Politics & Institutions"
      },
      {
        name: "Riccardo Venturi",
        description: "Coordinator, Identity"
      },
      {
        name: "Hannah Soraya",
        description: "Content Officer, Identity",
        twitter: "http://twitter.com/TheHannah__"
      },
      {
        name: "Henrik von Homeyer",
        description: "Content Officer, Identity"
      },
      {
        name: "Lina-Katerina Bikou",
        description: "Content Officer, Identity"
      },
      {
        name: "Nathalie Lambrecht",
        description: "Coordinator, Economic Affairs"
      },
      {
        name: "Alexandre Detroux",
        description: "Content Officer, Economic Affairs"
      },
      {
        name: "Pamina Karl",
        description: "Content Officer, Economic Affairs"
      },
      {
        name: "Anouk Canet",
        description: "Content Officer, Economic Affairs"
      },
      {
        name: "Constantin Gouvy",
        description: "Coordinator, Global Affairs"
      },
      {
        name: "Lina Papartyte",
        description: "Content Officer, Global Affairs",
        linkedin: "https://lt.linkedin.com/in/lina-papartyte-97593589"
      },
      {
        name: "Salvatore Berger",
        description: "Content Officer, Global Affairs",
        twitter: "http://twitter.com/BergerSalvatore"
      },
      {
        name: "Tollak Bowitz",
        description: "Content Officer, Global Affairs",
        twitter: "http://twitter.com/ztiw0b"
      },
      {
        name: "Edoardo Ravaioli",
        description: "External Content Officer",
        twitter: "http://twitter.com/ravaioledo"
      }
    ]
  },
  {
    name: "Events Team",
    members: [
      {
        name: "Alessandra Pozzi Rocco",
        description: "Deputy Head of Events"
      },
      {
        name: "Maria Scherbov",
        description: "Event Officer"
      },
      {
        name: "Pepe Mercadal Baquero",
        description: "Event Officer"
      },
      {
        name: "Elisabeth Laird",
        description: "Event Officer"
      },
      {
        name: "Greta Schmuelling",
        description: "Event Officer"
      },
      {
        name: "Tobias Mac-Lean",
        description: "Current Affairs Event Officer"
      },
      {
        name: "Martina Calleri",
        description: "Current Affairs Event Officer"
      }
    ]
  },
  {
    name: "Public Relations Team",
    members: [
      {
        name: "Otto Ilveskero",
        description: "Social Media Officer",
        linkedin: "https://uk.linkedin.com/in/otto-ilveskero-b32a47116/de",
        twitter: "http://twitter.com/IlvesOtto"
      },
      {
        name: "Florian L’Heureux",
        description: "Social Media Officer",
        linkedin: "https://be.linkedin.com/in/florian-l-heureux-327608b1/",
        twitter: "http://twitter.com/flolhe"
      },
      {
        name: "Elena Fabritius",
        description: "Network Management Officer",
        linkedin: "https://uk.linkedin.com/in/elena-fabritius-5b464283/"
      },
      {
        name: "Niall Lane",
        description: "Network Management Officer",
        linkedin: "https://ie.linkedin.com/in/niall-lane-b20a6959/"
      },
      {
        name: "Sam Hufton",
        description: "Online Media Officer"
      }
    ]
  }
];

const WhoWeAreComponent = () => (
  <div>
    <SubHeader pageName="WHO WE ARE"/>
    <div>
      {teamContainers.map((teamContainer, teamContainerIndex) => {
        let memberReverse = false;
        return (
          <div key={teamContainerIndex} style={styles.teamContainer}>
            <h2>{teamContainer.name}</h2>
            <div style={styles.membersContainer}>
              {teamContainer.members.map((member, memberIndex) => {
                if (memberIndex % 2 === 0) {
                  memberReverse = !memberReverse;
                }
                let memberImage = member.image;
                if (member.image === undefined) {
                  memberImage = "images/team_member_default_image.jpg";
                }
                return (
                  <div key={memberIndex} style={styles.iconBox(memberReverse)}>
                    <div style={styles.memberImage}>
                      <img src={memberImage}/>
                    </div>
                    <div style={styles.memberText(memberReverse)}>
                      <h4>{member.name}</h4>
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
