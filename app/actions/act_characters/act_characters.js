
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const getCharacters = chars => ({
  type: GET_CHARACTERS,
  payload: chars,
});

export const GET_CHARACTER = 'GET_CHARACTER';
export const getCharacter = char => ({
  type: GET_CHARACTER,
  payload: char,
});
