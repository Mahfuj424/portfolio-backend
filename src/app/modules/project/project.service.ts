import { IProject } from "./project.interface";
import { Project } from "./project.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
const createProjectIntoDB = async (payload: IProject) => {
  // Check if a project with the same liveLink already exists
  const existingProject = await Project.findOne({ liveLink: payload.liveLink });
  if (existingProject) {
    throw new Error("Project already exists!!");
  }

  // Create the project using the payload
  const result = await Project.create(payload);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
};
