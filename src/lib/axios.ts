import "server-only";

import axios from "axios";

const baseURL = process.env.API_BASE_URL;

if (!baseURL) {
  throw new Error("Missing required server environment variable: API_BASE_URL");
}

const http = axios.create({ baseURL });

export default http;
