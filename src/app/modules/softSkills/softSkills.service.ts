import { ISoftSkills } from "./softSkills.interface";
import { SoftSkill } from "./softSkills.model";

const createSoftSkillsIntoDB = async (payload: ISoftSkills) => {
  const result = await SoftSkill.create(payload);
  return result;
};

const getAllSoftSkillsFromDB = async () => {
  const skills = await SoftSkill.find();
  return skills;
};

export const SoftSkillsServices = {
  createSoftSkillsIntoDB,
  getAllSoftSkillsFromDB,
};
