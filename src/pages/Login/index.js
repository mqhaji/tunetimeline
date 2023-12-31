import React from 'react';
import {
    CLIENT_ID,
    CLIENT_SECRET,
    SPOTIFY_AUTHORIZE_ENDPOINT,
    REDIRECT_URL_AFTER_LOGIN,
    SCOPES_URL_PARAM
} from '../../auth/'

const Login = () => {

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    return (
        <div className='login'>
            <h1>Login with Spotify</h1>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
};

export default Login; 