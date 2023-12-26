import { api } from "./instance";

export const otherApi = {
  //   work
  getDoctorById(id_doctor: any) {
    return api.post("/route_functions/doctor", { id_doctor });
  },
  //   how check
  getDoctorPatientId(id_doctor: string) {
    return api.post("/route_functions/pacient", { id_doctor });
  },
  //   work
  getExercisez() {
    return api.get("/route_functions/exercises");
  },
  //  work
  updateDoctorProfile(data: any) {
    return api.post("/route_functions/updatedoctor", data);
  },
  //   work
  getPatientResults(patient_id: string) {
    return api.post("/route_functions/results", patient_id);
  },
  // will work
  updatePatientProfile(data: any) {
    return api.post("/route_functions/updatepatient", data);
  },
  //   work
  addPatientResult(data: any) {
    return api.post("/route_functions/survey", data);
  },
};
