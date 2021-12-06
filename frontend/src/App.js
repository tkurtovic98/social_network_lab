import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cookies from "js-cookie";
import NftView from "./components/nfts/NftView";

const serverUrl = "http://localhost:8080";
const googleAuthUrl = serverUrl + "/auth/google";
const nftsUrl = serverUrl + "/nfts/info";
const logoutUrl = serverUrl + "/logout";

const instance = axios.create({ withCredentials: true });

const nftDataModel = (floor, mc, owners, name) => {
  return {
    floor: floor,
    mc: mc,
    owners: owners,
    name: name,
  };
};

function App() {
  const [nftData, setNftData] = useState(null);
  const [token, setToken] = useState(Cookies.get("token"));

  useEffect(() => {
    instance.defaults.headers.common["token"] = token;
  }, [token]);

  const makeNft = (apiModel) => {
    return nftDataModel(
      apiModel.floor,
      apiModel.mc,
      apiModel.owners,
      apiModel.name
    );
  };

  return (
    <>
      {!token && (
        <div className="App">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.open(googleAuthUrl, "_self");
            }}
          >
            Google
          </button>
        </div>
      )}

      {token && (
        <div>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              instance
                .get(nftsUrl)
                .then((response) => {
                  setNftData(makeNft(response.data));
                })
                .catch((err) => console.log(err));
            }}
          >
            Nfts
          </button>

          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              instance
                .get(logoutUrl)
                .then((response) => {
                  setToken(Cookies.get("token"));
                })
                .catch((err) => console.log(err));
            }}
          >
            Logout
          </button>

          {nftData && <NftView model={nftData} />}
        </div>
      )}
    </>
  );
}

export default App;
