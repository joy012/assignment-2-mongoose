import { NextFunction, Request, Response } from 'express';
import { errorHandlingAsync } from '../../utils/errorHandlingAsync';
import { sendResponse } from '../../utils/globalResponseHandler';
import { ProductService } from './product.service';

const createProduct = errorHandlingAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const result = await ProductService.createProductInDB(data);

    sendResponse({
      data: result.toObject(),
      message: 'Product created successfully',
      statusCode: 201,
      success: true,
      res,
    });
  }
);

export const ProductController = {
  createProduct,
};
