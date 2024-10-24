import { IEducation } from "./education.interface";
import Education from "./education.model";

const createEducationIntoDB = async (payload: IEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getAllEducationFromDB = async () => {
  const education = await Education.find();
  return education;
};

export const EducationServices = {
  createEducationIntoDB,
  getAllEducationFromDB,
};
