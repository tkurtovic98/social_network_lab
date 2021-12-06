import { Authentication } from "../auth/Authentication";
import { NftContainer } from "../nfts/NftContainer";
import { WeatherContainer } from "../weather/WeatherContainer";
import { HorizontalGroup } from "../group/HorizontalGroup";

import { getToken } from "../../source/TokenSource";

export const cardElements = (isAuthenticated, authStatusChangeCallback) => {
  let elements = [];

  if (isAuthenticated) {
    elements.push(
      <HorizontalGroup elements={[<NftContainer />, <WeatherContainer />]} />
    );
  }

  elements.push(
    <Authentication
      isAuthenticated={isAuthenticated}
      updateAuthStatus={() => authStatusChangeCallback(getToken())}
    />
  );

  return elements;
};
