const INITIAL_STATE = [];

export default function companies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COMPANIES_FETCH_ALL":
      return [...action.payload];
    case "COMPANIES_FETCH_ONE":
      return [...state, action.payload.company];
    default:
      return state;
  }
}
