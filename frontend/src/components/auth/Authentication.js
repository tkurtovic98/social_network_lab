import React from "react";
import axios from "axios";
import { googleAuthUrl, logoutUrl } from "../../api/utils/urls";
import { faModule } from "../../module/FaModule";

export const Authentication = ({ isAuthenticated, updateAuthStatus }) => {
  return (
    <div style={{ paddingTop: isAuthenticated ? "32px" : "" }}>
      {!isAuthenticated && (
        <button
          title="Sign in with google"
          className="btn"
          style={{ color: "#81B0FF" }}
          onClick={() => {
            window.open(googleAuthUrl, "_self");
          }}
        >
          {faModule.faIcons.google}
        </button>
      )}

      {isAuthenticated !== undefined && (
        <button
          title="Logout"
          className="btn btn-danger"
          onClick={() => {
            axios
              .get(logoutUrl)
              .then((response) => {
                updateAuthStatus();
              })
              .catch((err) => console.log(err));
          }}
        >
          {faModule.faIcons.signOut}
        </button>
      )}
    </div>
  );
};
