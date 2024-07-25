// put all your API call here

import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";
import { resGeneralError, throw400, throw500 } from "../utils/throwErrors.js";

const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
  },
};

export const fetchFromTMDB = async (url) => {
  try {
    const res = await axios.get(url, GET_OPTIONS);

    if (res.status !== 200)
      throw400("Failed to fetch data from TMDB " + res.statusText);

    return res.data;
  } catch (error) {
    throw500(error);
  }
};
