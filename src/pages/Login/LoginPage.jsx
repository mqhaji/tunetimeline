import React from "react";
import {
  CLIENT_ID,
  SPOTIFY_AUTHORIZE_ENDPOINT,
  REDIRECT_URI,
  SCOPES_URL_PARAM,
} from "auth";

export default function LoginPage() {
  const login = () => {
    window.location =
      `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}` +
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=${SCOPES_URL_PARAM}`;
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <h1>TuneTimeline</h1>
        <button
          id="login-button"
          className="spotify-login-button"
          onClick={login}
        >
          <img
            src="/assets/Primary_Logo_Black_RGB.svg"
            alt="Spotify logo"
            className="spotify-logo"
          />
          <span className="spotify-login-text">Log in with Spotify</span>
        </button>
      </div>
    </main>
  );
}
