// export const initialState = {
//   user: null,
//   playlists: [],
//   playing: false,
//   item: null,
//   token: null,
//   top_artists: null,
//   // "BQCo4FPmNfdWOSni5Uh4e1APFwMOygzIp2qoGKzuAE7EF1NuWteVwDCgNaIRbLBzPiGtPA74YnW9d9YKL1Ds4XFaRKr3wlmUtv43l4XQcGj4WPmRPkohoPGtCbOxXFZCB4IdH8SBXNBSJYr-UdzjPpt5-LhdDoxXETvGr69KuzNhSJTLiUXv",
// };
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
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
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    default:
      return state;
  }
};

export default reducer;
