import { Router } from 'express';
import { ProductController } from './product.controller';

const productRoutes = Router();

// /api/products route to create product
productRoutes.post('/', ProductController.createProduct);

// /api/products route to get all products or use searchTerm query to search products
productRoutes.get('/', ProductController.getAllProducts);

//  /api/products/:produtID route to get single product
productRoutes.get('/:produtID', ProductController.getSingleProduct);

// /api/products/:produtID route to update single product fully or partially
productRoutes.put('/:produtID', ProductController.updateProduct);

// /api/products/:produtID route to delete single product
productRoutes.delete('/:produtID', ProductController.deleteProduct);

export default productRoutes;
