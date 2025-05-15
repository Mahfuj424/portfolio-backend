import { IProject } from "./project.interface";
import { Project } from "./project.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
const createProjectIntoDB = async (payload: IProject) => {
  // Check if a project with the same liveLink already exists
  const existingProject = await Project.findOne({ liveLink: payload.liveLink });
  if (existingProject) {
    throw new Error("Project already exists!!");
  }

  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async (category?: string) => {
  let query = {};

  if (category) {
    query = { category };
  }

  // Retrieve projects based on the query
  const projects = await Project.find(query);

  // Return projects or an empty array if no projects are found
  return projects.length > 0 ? projects : [];
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

const getSingleProjectFromDB = async (projectId: string) => {
  const result = await Project.findById(projectId);
  return result;
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
  getSingleProjectFromDB,
};
