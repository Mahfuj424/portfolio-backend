import { Router } from "express";
import { TechSkillsControllers } from "./techSkills.controller";

const router = Router();

router.post("/create-skill", TechSkillsControllers.createTechSkills);

router.get("/skills", TechSkillsControllers.getAllTechSkills);

export const TechSkillRoutes = router;
