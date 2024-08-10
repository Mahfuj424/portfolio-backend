import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { productValudations } from "./product.validation";
import { prouductControllers } from "./product.controller";

const router = Router();

router.post(
  "/",
  validateRequest(productValudations.productValidationSchema),
  prouductControllers.createProduct
);

router.get("/:id", prouductControllers.getSingleProduct);

router.patch("/:id/decrease", prouductControllers.decreaseProductQuantity);

router.get("/", prouductControllers.getAllProduct);

router.put(
  "/:id",
  validateRequest(productValudations.productUpdateValidationSchema),
  prouductControllers.updateProduct
);

router.delete("/:id", prouductControllers.deleteProduct);

export const productRoutes = router;
