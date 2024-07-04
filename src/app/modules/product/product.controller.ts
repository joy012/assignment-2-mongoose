import { Request, Response } from "express";
import { errorHandlingAsync } from "../../utils/errorHandlingAsync";
import { sendResponse } from "../../utils/globalResponseHandler";
import { IProduct } from "./product.interface";
import { ProductService } from "./product.service";
import { productValidationSchema } from "./product.validation";

// Create a new product
const createProduct = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const productPayload = req.body;

    const parsedPayload = productValidationSchema.parse(productPayload);

    const result = await ProductService.createProductInDB(parsedPayload);

    sendResponse({
      data: result,
      message: "Product created successfully!",
      statusCode: 200,
      success: true,
      res,
    });
  },
);

// Get all products
const getAllProducts = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const products = await ProductService.getAllProductsFromDB();

    sendResponse({
      data: products,
      message: "Products fetched successfully!",
      statusCode: 200,
      success: true,
      res,
    });
  },
);

// Get single product
const getSingleProduct = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const { produtID } = req.params;
    const product = await ProductService.getSingleProductFromDB(produtID);

    sendResponse({
      data: product,
      message: "Product fetched successfully!",
      statusCode: 200,
      success: true,
      res,
    });
  },
);

// update a single product fully or partially
const updateProduct = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const { produtID } = req.params;
    const data: Partial<IProduct> = req.body;

    const product = await ProductService.updateProductInDB(produtID, data);

    sendResponse({
      data: product,
      message: "Product updated successfully!",
      statusCode: 200,
      success: true,
      res,
    });
  },
);

// delete a single product
const deleteProduct = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const { produtID } = req.params;

    await ProductService.deleteProductFromDB(produtID);

    sendResponse({
      data: null,
      message: "Product deleted successfully!",
      statusCode: 200,
      success: true,
      res,
    });
  },
);

// search product by query
const searchProduct = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const { searchTerm } = req.query;

    const products = await ProductService.searchProductFromDB(
      searchTerm as string,
    );

    sendResponse({
      data: products,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      statusCode: 200,
      success: true,
      res,
    });
  },
);

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
