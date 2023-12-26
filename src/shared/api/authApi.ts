//@ts-nocheck
import { AxiosError } from "axios";
import {
  getRefreshToken,
  removeAuthToken,
  removeRefreshToken,
} from "../utils/api";
import { api } from "./instance";

export const authApi = {
  authByLogin(data) {
    return api.post("/login", data);
  },
  registerDoctor(data) {
    return api.post("/registration/doctor", data);
  },
  registerUser(data) {
    return api.post("/registration/patient", data);
  },
  refreshAuthToken() {
    const refreshToken = getRefreshToken();

    return api
      .post<{ access_token: string; refresh_token?: string }>(
        "auth/oauth/token",
        null,
        {
          params: { grant_type: "refresh_token", refresh_token: refreshToken },
        },
      )
      .catch((err: AxiosError) => {
        removeAuthToken();
        removeRefreshToken();

        return Promise.reject(err);
      });
  },
};
