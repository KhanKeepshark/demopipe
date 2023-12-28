import type { AxiosResponse } from "axios";
import { api } from "./instance";

export const otherApi = {
  getDoctorById(id_doctor: string) {
    return api.post("/route_functions/doctor", { id_doctor });
  },
  getDoctorPatientId(id_doctor: string) {
    return api.post("/route_functions/pacient", { id_doctor });
  },
  getExercisez() {
    return api.get("/route_functions/exercises");
  },
  updateDoctorProfile(data: any) {
    return api.post("/route_functions/updatedoctor", data);
  },
  getPatientResults(patient_id: string) {
    return api.post("/route_functions/results", patient_id);
  },
  updatePatientProfile(data: any) {
    return api.post("/route_functions/updatepatient", data);
  },
  addPatientResult(data: any) {
    return api.post("/route_functions/survey", data);
  },
  uploadExtraFiles: (file?: File | null): Promise<AxiosResponse<string>> =>
    api.post(
      "/route_functions/uploadCert",
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    ),
};
