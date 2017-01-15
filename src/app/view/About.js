import React, {PropTypes} from "react";
import {Image} from "react-bootstrap";

import SubHeader from './SubHeader';
import EditMemberContainer from '../controller/container/editMemberContainer';

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
    position: 'relative',
    width: '50%',
    height: '100%'
  },
  link: {
    color: '#B19D64',
    fontSize: "12px"
  }
};

const AboutComponent = ({teams, handleEditMember, isLoggedIn}) => {
  const editMember = member => () => {
    handleEditMember(member.id, member.name, member.description, member.linkedin, member.teamId, member.twitter, member.image);
  };

  return (
    <div>
      <SubHeader pageName="WHO WE ARE"/>
      <div>
        <EditMemberContainer/>
        {isLoggedIn && <a onClick={editMember({})}><i className="fa fa-plus">Add Member</i></a>}
        {teams.map(team => {
          let memberReverse = false;
          return (
            <div key={team.id} style={styles.teamContainer}>
              <h2>{team.name}</h2>
              <div className="container-fluid" style={styles.membersContainer}>
                <div className="row">
                  {/* members */}
                  {team.members.map((member, memberIndex) => {
                    if (memberIndex % 2 === 0) {
                      memberReverse = !memberReverse;
                    }
                    let memberImage = member.image;
                    if (member.image === undefined) {
                      memberImage = "http://static.1989generationinitiative.org/images/team_member_default_image.jpg";
                    }

                    let memberStyle = "col-sm-6 member";
                    let memberTextStyle = "member-text";
                    let arrowStyle = "arrow";
                    if (memberReverse) {
                      memberStyle += " reverse";
                      memberTextStyle += " reverse";
                      arrowStyle += " reverse";
                    }
                    const id = `team-${team.id}_member-${member.id}`;
                    return (
                      <div id={id} className={memberStyle} key={member.id}>
                        <div style={styles.memberImage}>
                          <Image src={memberImage} responsive/>
                          <object className={arrowStyle} type="image/svg+xml" data="/arrow.svg"/>
                        </div>
                        <div className={memberTextStyle}>
                          <h4>{member.name}</h4>
                          {isLoggedIn && <a href={`#${id}`} onClick={editMember(member)}><i className="fa fa-pencil">Edit</i></a>}
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
};

AboutComponent.propTypes = {
  teams: PropTypes.array,
  handleEditMember: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired
};

const SocialLink = ({url, icon}) => {
  const iconClass = `fa ${icon} fa-2x`;
  if (url) {
    return <span><a style={styles.link} target="_blank" href={url}><i className={iconClass}/></a></span>;
  }
  return <span/>;
};

SocialLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string.isRequired
};

export default AboutComponent;
