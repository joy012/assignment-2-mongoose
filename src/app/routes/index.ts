import { Router } from 'express';
import productRoutes from '../modules/product/product.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/products',
    route: productRoutes,
  },
];

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
