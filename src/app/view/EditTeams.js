import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";
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
    width: '50%',
    height: '100%'
  },
  link: {
    color: '#B19D64',
    fontSize: "12px"
  }
};

const EditTeamsComponent = ({teams, handleEditMember}) => {
  const open = member => () => {
    handleEditMember(member.name, member.description, member.linkedin, member.twitter, member.image);
  };

  return (
    <div>
      <SubHeader pageName="ADMIN - TEAMS"/>
      <div>
        <EditMemberContainer/>
          {teams.map((team, teamIndex) => {
            return (
              <div key={teamIndex}>
                {team.members.map((member, memberIndex) => {
                  return (
                    <div key={memberIndex}>
                      <span>{member.name} - {team.name}</span>
                      <Button onClick={open(member)}>
                        Edit
                      </Button>
                    </div>
                  );
                })}
                {/* end of member*/}
              </div>
            );
          })}
      </div>
    </div>
  );
};

EditTeamsComponent.propTypes = {
  teams: PropTypes.array,
  handleEditMember: PropTypes.func
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

export default EditTeamsComponent;
