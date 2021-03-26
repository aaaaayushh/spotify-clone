export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCo4FPmNfdWOSni5Uh4e1APFwMOygzIp2qoGKzuAE7EF1NuWteVwDCgNaIRbLBzPiGtPA74YnW9d9YKL1Ds4XFaRKr3wlmUtv43l4XQcGj4WPmRPkohoPGtCbOxXFZCB4IdH8SBXNBSJYr-UdzjPpt5-LhdDoxXETvGr69KuzNhSJTLiUXv",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
