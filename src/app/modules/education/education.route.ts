import { Router } from "express";
import { EducationControllers } from "./education.controller";
const router = Router();

router.post("/create-education", EducationControllers.createEducation);

router.get("/", EducationControllers.getAllEducation);

export const EducationRoutes = router;
