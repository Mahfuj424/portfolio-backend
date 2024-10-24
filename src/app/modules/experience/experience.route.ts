import { Router } from "express";
import { ExperienceControllers } from "./experience.controller";
const router = Router();

router.post("/create-experience", ExperienceControllers.createExperience);

router.get("/", ExperienceControllers.getAllExperience);

export const ExperienceRoutes = router;
