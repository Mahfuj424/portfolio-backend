import { Router } from 'express';
import { productRoutes } from '../modules/products/product.route';
import { paymentRoutes } from '../modules/payment/payment.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/create-checkout-session',
    route: paymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
