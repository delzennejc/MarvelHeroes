
// Actions
export const ACTION = 'ACTION';

// Action Creators
export const insertData = (data) => {
  return {
    type: ACTION,
    payload: data
  };
};
