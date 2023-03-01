//@ts-nocheck
import type { AxiosError } from "axios";
import {
  getRefreshToken,
  removeAuthToken,
  removeRefreshToken,
} from "../utils/api";
import { api } from "./instance";

export const authApi = {
  authByLogin(
    data,
  ): Promise<AxiosResponse<{ message: string; userData: string }>> {
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
      .post<{ access_token: string; refresh_token?: string }>("refresh", null, {
        params: { grant_type: "refresh_token", refresh_token: refreshToken },
      })
      .catch((err: AxiosError) => {
        removeAuthToken();
        removeRefreshToken();

        return Promise.reject(err);
      });
  },
};
