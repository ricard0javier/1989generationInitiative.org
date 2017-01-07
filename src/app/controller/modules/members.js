import axios from "axios";

// Actions
const LOAD = 'app/members/LOAD';
const LOAD_SUCCESS = 'app/members/LOAD_SUCCESS';
// const LOAD_FAIL = 'app/members/LOAD_FAIL';
const EDIT_START = 'app/members/EDIT_START';
const EDIT_STOP = 'app/members/EDIT_STOP';
const SAVE = 'app/members/SAVE';
// const SAVE_SUCCESS = 'app/members/SAVE_SUCCESS';
// const SAVE_FAIL = 'app/members/SAVE_FAIL';
// const DELETE = 'app/members/DELETE';
// const DELETE_SUCCESS = 'app/members/DELETE_SUCCESS';
// const DELETE_FAIL = 'app/members/DELETE_FAIL';

// Reducers
const initialState = {
  data: new Map(),
  showForm: false,
  isLoading: false,
  isSaving: false,
  form: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD:
      return {...state, isLoading: true};

    case LOAD_SUCCESS:
      return {...state, isLoading: false, data: action.data};

    case EDIT_START:
      return {
        ...state,
        showForm: true,
        form: action.form
      };

    case EDIT_STOP:
      return {
        ...state,
        showForm: false,
        form: {}
      };

    case SAVE:
      return {
        ...state,
        data: action.members,
        isSaving: true
      };

    default:
      return state;
  }
};

// Action Creators
const MEMBERS_URL = "http://static.1989generationinitiative.org/data/members.json";

export const loadMembers = () => dispatch => {
  axios
    .get(MEMBERS_URL)
    .then(response => {
      const members = new Map();
      response.data.map(value => members.set(value.id, value));
      dispatch(loadSuccessMembers(members));
    });
  return {
    type: LOAD
  };
};

export function loadSuccessMembers(members) {
  return {
    type: LOAD_SUCCESS,
    data: members
  };
}

export function editStartMembers(id, name, description, linkedin, teamId, twitter, image) {
  return {
    type: EDIT_START,
    form: {description, id, image, linkedin, name, teamId, twitter}
  };
}

export function editStopMembers() {
  return {
    type: EDIT_STOP
  };
}

export const saveMembers = member => (dispatch, getState) => {
  const members = getState().members.data;
  const id = parseInt(member.id, 10);
  if (isNaN(id)) {
    members.set(100, {...member, id: 100, teamId: parseInt(member.teamId, 10)});
  } else {
    const oldMember = members.get(id);
    oldMember.name = member.name;
    oldMember.description = member.description;
    oldMember.linkedin = member.linkedin;
    oldMember.twitter = member.twitter;
    oldMember.image = member.image;
    oldMember.teamId = parseInt(member.teamId, 10);
  }
  return {
    type: SAVE,
    members
  };
};

export default reducer;
