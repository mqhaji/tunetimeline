// NEVER expose CLIENT_SECRET in front-end code
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPES = [
  'user-top-read',
  'user-read-private',
  'user-library-read',
  'playlist-read-private',
];
const SCOPES_URL_PARAM = SCOPES.join('%20');

export {
  CLIENT_ID,
  REDIRECT_URI,
  SPOTIFY_AUTHORIZE_ENDPOINT,
  SCOPES_URL_PARAM,
};
