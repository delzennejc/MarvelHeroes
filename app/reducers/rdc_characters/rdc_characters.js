import {
  GET_CHARACTERS,
  GET_CHARACTER,
} from '../../actions/act_characters';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        selectedChar: action.payload,
      };
    default:
      return state;
  }
};
