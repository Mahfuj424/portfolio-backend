import { Router } from "express";
import { SoftSkillsControllers } from "./softSkills.controller";

const router = Router();

router.post("/create-skill", SoftSkillsControllers.createSoftSkills);

router.get("/skills", SoftSkillsControllers.getAllSoftSkills);

export const SoftSkillRoutes = router;
