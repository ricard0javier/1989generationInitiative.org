import React, {PropTypes} from "react";
import {Image} from "react-bootstrap";
import SubHeader from "./subHeader";

const styles = {
  teamContainer: {
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  membersContainer: {
    color: '#B19D64'
  },
  memberImage: {
    width: '50%',
    height: '100%'
  },
  link: {
    color: '#B19D64',
    fontSize: "12px"
  }
};

const WhoWeAreComponent = ({teams}) => (
  <div>
    <SubHeader pageName="WHO WE ARE"/>
    <div>
      {teams.map((teamContainer, teamContainerIndex) => {
        let memberReverse = false;
        return (
          <div key={teamContainerIndex} style={styles.teamContainer}>
            <h2>{teamContainer.name}</h2>
            <div className="container-fluid" style={styles.membersContainer}>
              <div className="row">

                {/* members */}
                {teamContainer.members.map((member, memberIndex) => {
                  if (memberIndex % 2 === 0) {
                    memberReverse = !memberReverse;
                  }
                  let memberImage = member.image;
                  if (member.image === undefined) {
                    memberImage = "http://static.1989generationinitiative.org/images/team_member_default_image.jpg";
                  }

                  let memberStyle = "col-sm-6 member";
                  let memberTextStyle = "member-text";
                  if (memberReverse) {
                    memberStyle += " reverse";
                    memberTextStyle += " reverse";
                  }
                  return (
                    <div className={memberStyle} key={memberIndex}>
                      <div style={styles.memberImage}>
                        <Image src={memberImage} responsive/>
                      </div>
                      <div className={memberTextStyle}>
                        <h4>{member.name}</h4>
                        <p>{member.description}</p>
                        <SocialLink icon="fa-linkedin-square" url={member.linkedin}/>
                        <SocialLink icon="fa-twitter" url={member.twitter}/>
                      </div>
                    </div>
                  );
                })}
                {/* end of member*/}

              </div>

            </div>
          </div>
        );
      })}
    </div>
  </div>
);

WhoWeAreComponent.propTypes = {
  teams: PropTypes.array
};

const SocialLink = ({url, icon}) => {
  const iconClass = `fa ${icon} fa-2x`;
  if (url !== undefined) {
    return <span><a style={styles.link} target="_blank" href={url}><i className={iconClass}/></a></span>;
  }
  return <span/>;
};

SocialLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string.isRequired
};

export default WhoWeAreComponent;
