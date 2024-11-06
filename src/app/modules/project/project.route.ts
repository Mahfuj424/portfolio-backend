import { Router } from "express";
import { ProjectControllers } from "./project.controller";

const router = Router();

router.post("/create-project", ProjectControllers.createProject);

router.get("/", ProjectControllers.getAllProjects);

router.get("/:projectId", ProjectControllers.getSingleProjects);

router.patch("/:projectId", ProjectControllers.updateProject);

router.delete("/:projectId", ProjectControllers.deleteProject);

export const ProjectRoutes = router;
