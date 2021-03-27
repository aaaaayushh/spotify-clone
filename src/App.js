import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //get token from url
    const hash = getTokenFromUrl();
    //to make sure access token is not visible in url
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //store token in state

      //give the access token to spotify api
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log("person", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //get playlists from user account
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcF9KJiuP5z60").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getMyTopArtists().then((res) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: res,
        });
      });
    }
  }, []);
  // console.log("person", user);
  // console.log("token:", token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
