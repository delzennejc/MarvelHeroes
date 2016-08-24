import { ACTION } from '../../actions/act_data';

const INITIAL_STATE = {
  love: 'LOVE',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        love: action.payload,
      };
    default:
      return state;
  }
};
