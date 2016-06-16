import { ACTION } from '../actions/index';

const INITIAL = {};

export default (state = INITIAL, action) => {
  switch (action.type) {
   case ACTION:
      return state;
   default:
     return state;
   }
};
