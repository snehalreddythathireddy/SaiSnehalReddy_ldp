import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zowqrl8r8mxjqsua.us.auth0.com"
      clientId="BkIPYTWo07ot9AzbVUbY4NuCIuut0cIQ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);