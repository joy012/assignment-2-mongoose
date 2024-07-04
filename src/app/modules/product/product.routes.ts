import { Router } from 'express';
import { ProductController } from './product.controller';

const productRoutes = Router();

productRoutes.post('/product', ProductController.createProduct);

export default productRoutes;
