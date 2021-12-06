import axios from "axios";
import { nftsUrl } from "../utils/urls";
import { handleResult } from "./Service";

export const fetchNftData = async () => {
  let result = await axios.get(nftsUrl);
  return handleResult(result);
};
