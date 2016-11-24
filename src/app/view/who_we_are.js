import React from "react";

import SubHeader from './subHeader';

let memberReverse = false;
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
  memberText: {
    padding: "1em",
    textAlign: 'left',
    width: '50%',
    height: '100%'
  },
  memberImage: {
    width: '50%',
    height: '100%'
  },
  link: {
    color: '#B19D64',
    fontSize: "1em"
  },
  iconBox(index) {
    if (index % 2 === 0) {
      memberReverse = !memberReverse;
    }
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
    name: "Team Title",
    members: [
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      },
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      },
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      },
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      },
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      },
      {
        name: "Name Here",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        linkedin: "#",
        image: "images/member_default.png"
      }
    ]
  }
];

const WhoWeAreComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="WHO WE ARE"/>
    <div>
      {teamContainers.map((teamContainer, teamContainerIndex) => (
        <div key={teamContainerIndex} style={styles.teamContainer}>
          <h4>{teamContainer.name}</h4>
          <div style={styles.membersContainer}>
            {teamContainer.members.map((member, memberIndex) => (
              <div key={memberIndex} style={styles.iconBox(memberIndex)}>
                <div style={styles.memberImage}>
                  <img src={member.image}/>
                </div>
                <div style={styles.memberText}>
                  <h5>{member.name}</h5>
                  <p>{member.description}</p>
                  <span><a style={styles.link} href="https://www.linkedin.com/company/9387318"><i className="fa fa-linkedin-square fa-2x"/></a></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WhoWeAreComponent;
