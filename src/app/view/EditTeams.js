import React, {PropTypes} from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Image, Panel, PanelGroup} from "react-bootstrap";
import SubHeader from './SubHeader';

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

const title = name => <h3>{name}</h3>;

const FieldGroup = ({id, label, type, placeHolder, value}) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={10}>
      <FormControl type={type} placeholder={placeHolder} value={value}/>
    </Col>
  </FormGroup>
);

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string
};

const handleSave = event => {
  event.preventDefault();
  console.log(event);
};

const EditTeamsComponent = ({teams}) => (
  <div>
    <SubHeader pageName="ADMIN - TEAMS"/>
    <div>
      <PanelGroup defaultActiveKey="1" accordion>
        {teams.map((team, teamIndex) => {
          return (
            <Panel key={teamIndex} eventKey={teamIndex} bsStyle="primary" header={title(team.name)}>
              {team.members.map((member, memberIndex) => {
                return (
                  <PanelGroup key={memberIndex} accordion>
                    <Panel eventKey={memberIndex} bsStyle="success" header={title(member.name)}>
                      <Form horizontal>
                        <FieldGroup id="name" label="Full Name" type="text" placeHolder="Full Name" value={member.name}/>
                        <FieldGroup id="description" label="Description" type="text" placeHolder="Position description" value={member.description}/>
                        <FieldGroup id="linkedin" label="Linkein" type="url" placeHolder="Linkedin URL" value={member.linkedin}/>
                        <FieldGroup id="twitter" label="Twitter" type="url" placeHolder="Twitter URL" value={member.twitter}/>
                        <FieldGroup id="image" label="Image" type="url" placeHolder="Image URL" value={member.image}/>
                        <Image src={member.image} rounded/>

                        <FormGroup>
                          <Col smOffset={2} sm={1}>
                            <Button type="submit" onClick={handleSave}>
                              Save
                            </Button>
                          </Col>
                          <Col sm={1}>
                            <Button type="submit">
                              Delete
                            </Button>
                          </Col>
                        </FormGroup>

                      </Form>
                    </Panel>
                  </PanelGroup>
                );
              })}
              {/* end of member*/}
            </Panel>
          );
        })}
      </PanelGroup>
    </div>
  </div>
);

EditTeamsComponent.propTypes = {
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

export default EditTeamsComponent;
