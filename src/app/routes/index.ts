import { Router } from 'express';
import orderRoutes from '../modules/order/order.routes';
import productRoutes from '../modules/product/product.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  },
];

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
