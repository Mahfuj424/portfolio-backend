import { IExperience } from "./experience.interface";
import Experience from "./experience.model";

const createExperienceIntoDB = async (payload: IExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperienceFromDB = async () => {
  const experiences = await Experience.find();
  return experiences;
};

export const ExperienceServices = {
  createExperienceIntoDB,
  getAllExperienceFromDB,
};
