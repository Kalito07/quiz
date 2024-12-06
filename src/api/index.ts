import Axios from "axios";
import { env } from "@/utils/env";

import auth from "@/api/auth";
import quiz from "@/api/quiz";

export const axios = Axios.create({
  baseURL: env.VITE_SERVER_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const api = {
  auth,
  quiz,
};
