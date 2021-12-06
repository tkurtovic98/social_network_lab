import axios from "axios";
import { getToken } from "../../source/TokenSource";

export const tokenInterceptor = () => {
  axios.interceptors.request.use((config) => {
    config.headers.common["token"] = getToken();
    config.withCredentials = true
    return config;
  });
};
