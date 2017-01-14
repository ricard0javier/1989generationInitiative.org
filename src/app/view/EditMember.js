import React, {PropTypes} from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Image, Modal} from "react-bootstrap";

const FieldGroup = ({id, label, type, placeHolder, value, inputRef}) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={10}>
      <FormControl type={type} placeholder={placeHolder} defaultValue={value} inputRef={inputRef}/>
    </Col>
  </FormGroup>
);

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  inputRef: React.PropTypes.func
};

const EditMemberModalComponent = ({showForm, form, teams, editStopMembers, saveMembers}) => {
  let {description, id, image, linkedin, name, teamId, twitter} = form;
  const refs = {};

  if (image === undefined) {
    image = "http://static.1989generationinitiative.org/images/team_member_default_image.jpg";
  }

  const handleId = node => {
    refs.id = node;
  };

  const handleDescription = node => {
    refs.description = node;
  };

  const handleImage = node => {
    refs.image = node;
  };

  const handleLinkedin = node => {
    refs.linkedin = node;
  };

  const handleName = node => {
    refs.name = node;
  };

  const handleTwitter = node => {
    refs.twitter = node;
  };

  const handleTeam = node => {
    refs.teamId = node;
  };

  const handleSave = event => {
    event.preventDefault();

    const member = {
      id: refs.id.value,
      description: refs.description.value,
      image: refs.image.value,
      linkedin: refs.linkedin.value,
      name: refs.name.value,
      twitter: refs.twitter.value,
      teamId: refs.teamId.value
    };

    saveMembers(member);
  };

  const handleClose = event => {
    event.preventDefault();
    editStopMembers();
  };

  return (
    <Modal show={showForm}>
      <Modal.Body>
        <Form horizontal onSubmit={handleSave}>
          <input id="id" ref={handleId} defaultValue={id} hidden/>
          <FieldGroup id="name" inputRef={handleName} label="Full Name" type="text" placeHolder="Full Name" value={name}/>
          <FieldGroup id="description" inputRef={handleDescription} label="Description" type="text" placeHolder="Position description" value={description}/>
          <FieldGroup id="linkedin" inputRef={handleLinkedin} label="Linkein" type="url" placeHolder="Linkedin URL" value={linkedin}/>
          <FieldGroup id="twitter" inputRef={handleTwitter} label="Twitter" type="url" placeHolder="Twitter URL" value={twitter}/>
          <FormGroup controlId="team">
            <Col componentClass={ControlLabel} sm={2}>Team</Col>
            <Col sm={10}>
              <FormControl componentClass="select" defaultValue={teamId} placeholder="Select Team" inputRef={handleTeam}>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>
          <FieldGroup id="image" inputRef={handleImage} label="Image" type="url" placeHolder="Image URL" value={image}/>
          <FormGroup>
            <Col sm={2}/>
            <Col sm={10}>
              <Image src={image} rounded/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} xs={10}>
              <Button type="submit">
                Save
              </Button>
              <Button type="submit">
                Delete
              </Button>
              <Button type="submit" onClick={handleClose}>
                Close
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

EditMemberModalComponent.propTypes = {
  showForm: PropTypes.bool,
  form: PropTypes.object,
  editStopMembers: PropTypes.func,
  saveMembers: PropTypes.func,
  teams: PropTypes.array
};

export default EditMemberModalComponent;
