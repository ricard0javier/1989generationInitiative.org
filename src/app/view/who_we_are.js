import React from "react";
import {Image} from "react-bootstrap";
import SubHeader from "./subHeader";

const styles = {
  teamContainer: {
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
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
    fontSize: "12px"
  },
  memberText(memberReverse) {
    return {
      padding: "5px",
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
        image: "http://static.1989generationinitiative.org/images/team_member_michael_cottakis.jpg"
      },
      {
        name: "Antonios Fiala",
        description: "General Secretary",
        linkedin: "https://uk.linkedin.com/pub/antonios-fiala/85/701/453",
        image: "http://static.1989generationinitiative.org/images/team_member_antonios_fiala.jpg"
      },
      {
        name: "Nicholas Charalambides",
        description: "VP Treasury",
        linkedin: "https://uk.linkedin.com/in/nicholascharalambides",
        image: "http://static.1989generationinitiative.org/images/team_member_nicholas_charalambides.jpg"
      },
      {
        name: "Barbara Aubin",
        description: "Head of Content",
        linkedin: "https://www.linkedin.com/in/barbara-aubin-3302a491",
        image: "http://static.1989generationinitiative.org/images/team_member_barbara_aubin.jpg"
      },
      {
        name: "Elena Turci",
        description: "Head of Events",
        linkedin: "https://be.linkedin.com/in/eturci/de",
        image: "http://static.1989generationinitiative.org/images/team_member_elena_turci.jpg"
      },
      {
        name: "Martin Schmidler",
        description: "Head of Public Relations",
        linkedin: "http://www.linkedin.com/in/martin-schmidler",
        image: "http://static.1989generationinitiative.org/images/team_member_martin_scmidler.jpg"
      },
      {
        name: "Dominik Kirchdorfer",
        description: "Head of Expansion",
        linkedin: "https://www.linkedin.com/in/dfkirchdorfer/en",
        image: "http://static.1989generationinitiative.org/images/team_member_dominik_kirchdorfer.jpg"
      }
    ]
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Adela Alexandra Iacobov",
        description: "Coordinator, Politics & Institutions",
        image: "http://static.1989generationinitiative.org/images/team_member_adela_alexandra_iacobov.jpg"
      },
      {
        name: "Adele Marsullo",
        description: "Content Officer, Politics & Institutions",
        image: "http://static.1989generationinitiative.org/images/team_member_adele_marsullo.jpg"
      },
      {
        name: "François Barres",
        description: "Content Officer, Politics & Institutions",
        image: "http://static.1989generationinitiative.org/images/team_member_francois_barres.jpg"
      },
      {
        name: "Alessandro Granato",
        description: "Content Officer, Politics & Institutions",
        image: "http://static.1989generationinitiative.org/images/team_member_alex_granato.jpg"
      },
      {
        name: "Riccardo Venturi",
        description: "Coordinator, Identity",
        image: "http://static.1989generationinitiative.org/images/team_member_riccardo_venturi.jpg"
      },
      {
        name: "Hannah Soraya",
        description: "Content Officer, Identity",
        twitter: "http://twitter.com/TheHannah__",
        image: "http://static.1989generationinitiative.org/images/team_member_hannah_soraya.jpg"
      },
      {
        name: "Henrik von Homeyer",
        description: "Content Officer, Identity",
        image: "http://static.1989generationinitiative.org/images/team_member_henrik_von_homeyer.jpg"
      },
      {
        name: "Lina-Katerina Bikou",
        description: "Content Officer, Identity",
        image: "http://static.1989generationinitiative.org/images/team_member_lina_katarina_bikou.jpg"
      },
      {
        name: "Nathalie Lambrecht",
        description: "Coordinator, Economic Affairs",
        image: "http://static.1989generationinitiative.org/images/team_member_nathalie_lambrecht.jpg"
      },
      {
        name: "Alexandre Detroux",
        description: "Content Officer, Economic Affairs",
        image: "http://static.1989generationinitiative.org/images/team_member_alexandre_detroux.jpg"
      },
      {
        name: "Pamina Karl",
        description: "Content Officer, Economic Affairs",
        image: "http://static.1989generationinitiative.org/images/team_member_pamina_karl.jpg"
      },
      {
        name: "Anouk Canet",
        description: "Content Officer, Economic Affairs",
        image: "http://static.1989generationinitiative.org/images/team_member_anouk_canet.jpg"
      },
      {
        name: "Constantin Gouvy",
        description: "Coordinator, Global Affairs",
        image: "http://static.1989generationinitiative.org/images/team_member_constantin_gouvy.jpg"
      },
      {
        name: "Lina Papartyte",
        description: "Content Officer, Global Affairs",
        linkedin: "https://lt.linkedin.com/in/lina-papartyte-97593589",
        image: "http://static.1989generationinitiative.org/images/team_member_lina_papartyte.jpg"
      },
      {
        name: "Salvatore Berger",
        description: "Content Officer, Global Affairs",
        twitter: "http://twitter.com/BergerSalvatore",
        image: "http://static.1989generationinitiative.org/images/team_member_salvatore_berger.jpg"
      },
      {
        name: "Boris Ajeganov",
        description: "Content Officer, Global Affairs",
        twitter: "http://twitter.com/ajeganov",
        image: "http://static.1989generationinitiative.org/images/team_member_boris_ajeganov.jpg"
      },
      {
        name: "Tollak Bowitz",
        description: "Content Officer, Global Affairs",
        twitter: "http://twitter.com/ztiw0b",
        image: "http://static.1989generationinitiative.org/images/team_member_tollak_bowitz.jpg"
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
        twitter: "http://twitter.com/IlvesOtto",
        image: "http://static.1989generationinitiative.org/images/team_member_otto_ilveskero.jpg"
      },
      {
        name: "Florian L’Heureux",
        description: "Social Media Officer",
        linkedin: "https://be.linkedin.com/in/florian-l-heureux-327608b1/",
        twitter: "http://twitter.com/flolhe",
        image: "http://static.1989generationinitiative.org/images/team_member_florian_lheureux.jpg"
      },
      {
        name: "Elena Fabritius",
        description: "Network Management Officer",
        linkedin: "https://uk.linkedin.com/in/elena-fabritius-5b464283/",
        image: "http://static.1989generationinitiative.org/images/team_member_elena_fabritius.jpg"
      },
      {
        name: "Niall Lane",
        description: "Network Management Officer",
        linkedin: "https://ie.linkedin.com/in/niall-lane-b20a6959/",
        image: "http://static.1989generationinitiative.org/images/team_member_niall_lane.jpg"
      },
      {
        name: "Sam Hufton",
        description: "Online Media Officer",
        image: "http://static.1989generationinitiative.org/images/team_member_sam_hufton.jpg"
      },
      {
        name: "Verena Reihs",
        description: "Press Relations Officer",
        linkedin: "https://nl.linkedin.com/in/verena-reihs-86380410b",
        twitter: "http://twitter.com/en_lein",
        image: "http://static.1989generationinitiative.org/images/team_member_verena_reihs.jpg"
      }
    ]
  },
  {
    name: "Expansion Team",
    members: [
      {
        name: "Julia Walschebauer",
        description: "Regional Coordinator - Belgium",
        linkedin: "http://twitter.com/JuliaWalsche",
        image: "http://static.1989generationinitiative.org/images/team_member_julia_walschebauer.jpg"
      },
      {
        name: "Clemens Ableidinger",
        description: "Regional Coordinator - Austria"
      },
      {
        name: "Jakub Tlolka",
        description: "Regional Coordinator - Slovakia",
        image: "http://static.1989generationinitiative.org/images/team_member_jakub_tlolka.jpg"
      },
      {
        name: "Sylwia Borkowska-Waszak",
        description: "Regional Coordinator - Scotland"
      },
      {
        name: "Julia Schinzel",
        description: "Intern"
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
                  memberImage = "http://static.1989generationinitiative.org/images/team_member_default_image.jpg";
                }
                return (
                  <div key={memberIndex} style={styles.iconBox(memberReverse)}>
                    <div style={styles.memberImage}>
                      <Image src={memberImage} responsive/>
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
