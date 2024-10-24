import { ITechSkills } from "./techSkills.interface";
import { TechSkill } from "./techSkills.model";

const createTechSkillsIntoDB = async (payload: ITechSkills) => {
  // Check if a project with the same liveLink already exists
  const existingSkill = await TechSkill.findOne({ name: payload.name });
  if (existingSkill) {
    throw new Error("skill already exists!!");
  }

  // Create the project using the payload
  const result = await TechSkill.create(payload);
  return result;
};

const getAllTechSkillsFromDB = async () => {
  const skills = await TechSkill.find();
  return skills;
};

export const TechSkillsServices = {
  createTechSkillsIntoDB,
  getAllTechSkillsFromDB,
};
