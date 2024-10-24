import { Router } from "express";
import { ViewsControllers } from "./views.controller";

const router = Router();

router.post("/:blogId", ViewsControllers.createViews);

export const ViewsRoutes = router;
