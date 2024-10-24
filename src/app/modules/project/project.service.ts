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

// Service to get all projects or filter by category
const getAllProjectsFromDB = async (category?: string) => {
  let query = {};

  // If a category is provided, add it to the query
  if (category) {
    query = { category };
  }

  // Retrieve projects based on the query
  const projects = await Project.find(query);
  return projects;
};

const updateProjectById = async (
  projectId: string,
  payload: Partial<IProject>
) => {
  const updatedProject = await Project.findByIdAndUpdate(projectId, payload, {
    new: true,
  });
  if (!updatedProject) {
    throw new Error("Project not found or couldn't be updated");
  }
  return updatedProject;
};

// Service to delete a project by ID
const deleteProjectById = async (projectId: string) => {
  const deletedProject = await Project.findByIdAndDelete(projectId);
  if (!deletedProject) {
    throw new Error("Project not found or couldn't be deleted");
  }
  return deletedProject;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  updateProjectById,
  deleteProjectById,
};
