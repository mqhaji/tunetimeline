import React, { useEffect, useState } from "react";

/**
 * Home component that displays user's Spotify profile information
 */
export default function HomePage() {
  const [token, setToken] = useState("");

  const getParamsFromHash = (hash) =>
    hash
      .substring(1)
      .split("&") // ["access_token=…", "token_type=…"]
      .map((kv) => kv.split("=")) // [["access_token","…"],["token_type","Bearer"]]
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

  /* 1️: grab token from localStorage every render */
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  /* 2️: parse token from the redirect hash the FIRST time we land here */
  useEffect(() => {
    if (window.location.hash) {
      const tokens = getParamsFromHash(window.location.hash);
      localStorage.setItem("token", tokens.access_token);
      setToken(tokens.access_token);
      window.history.replaceState({}, "", "/home"); // clean URL
    }
  }, []);

  return (
    <main>
      {token ? (
        <>
          <h1>Home Page</h1>
          <p>Token: {token}</p>
        </>
      ) : (
        <p>No token yet – log in first.</p>
      )}
    </main>
  );
}
