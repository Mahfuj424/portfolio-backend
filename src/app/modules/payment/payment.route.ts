import { Router } from "express";
import makepaymentController from "./payment.controller";

const router = Router()


router.post('/', makepaymentController)

export const paymentRoutes = router;