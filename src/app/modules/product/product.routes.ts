import { Router } from "express";
import { ProductController } from "./product.controller";

const productRoutes = Router();

// /api/products route to create product
productRoutes.post("/", ProductController.createProduct);

// /api/products route to get all products
productRoutes.get("/", ProductController.getAllProducts);

//  /api/products/:produtID route to get single product
productRoutes.get("/:produtID", ProductController.getSingleProduct);

// /api/products/:produtID route to update single product fully or partially
productRoutes.put("/:produtID", ProductController.updateProduct);

// /api/products/:produtID route to delete single product
productRoutes.delete("/:produtID", ProductController.deleteProduct);

// search a product by query
productRoutes.get("/", ProductController.searchProduct);

export default productRoutes;
