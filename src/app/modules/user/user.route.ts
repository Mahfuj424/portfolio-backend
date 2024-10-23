import { Router } from "express";
// import validateRequest from "../../middleware/validateRequest";
// import { userValidationSchema } from "./user.validation";
import { UserControllers } from "./user.controller";

const router = Router();

router.post("/create-user", UserControllers.createUser);
router.get("/:id", UserControllers.getSingleUser);

export const UserRoutes = router;
