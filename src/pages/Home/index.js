import React, { useEffect, useState } from 'react';

/**
 * Home component that displays user's Spotify profile information
 * @returns {JSX.Element} JSX element containing user's profile information
 */
const Home = () => {

    const [token, setToken] = useState('');
    const [playlists, setPlaylists] = useState({});
    const [tracks, setTracks] = useState({});
    const [artists, setArtists] = useState({});
    const [profile, setProfile] = useState({});

    const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
    const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
    const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
    const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

    /**
     * Extracts parameters from the hash of the URL
     * @param {string} hash - The hash string from the URL
     * @returns {Object} An object containing the parameters extracted from the hash
     */
    const getParamsFromHash = (hash) => {
        const hashContent = hash.substr(1); // Remove first char (#)
        const paramsSplit = hashContent.split('&');
        let params = {};
        let values = [];
        paramsSplit.forEach((param) => {
            values = param.split('=');
            params[values[0]] = values[1];
        })
        return params;
    }

    // useEffect hook runs when the component mounts
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    // useEffect hook runs when the component mounts
    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash;
            const tokens = getParamsFromHash(hash);
            localStorage.setItem('token', tokens.access_token);
            setToken(tokens.access_token);
            window.history.pushState({}, null, '/home');
        }
    }, []);

    return (
        <div>
            {
                token &&
                <div>
                    <h1>Home Page</h1>
                    <p>Token: {token}</p>
                </div>
            }
        </div>
    );
};

export default Home;