import axios from "axios";
import { config } from "../helpers/constants";

const customAxios = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "X-RapidAPI-Key": config.apiKey,
    "X-RapidAPI-Host": config.apiBaseHost,
  },
});

export default customAxios;
