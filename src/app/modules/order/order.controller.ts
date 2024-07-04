import { Request, Response } from 'express';
import { errorHandlingAsync } from '../../utils/errorHandlingAsync';
import { sendResponse } from '../../utils/globalResponseHandler';
import { OrderService } from './order.service';
import { orderValidationSchema } from './order.validation';

// Create new order
const createOrder = errorHandlingAsync(async (req: Request, res: Response) => {
  const orderPayload = req.body;

  const parsedPayload = orderValidationSchema.parse(orderPayload);

  const result = await OrderService.createOrderInDB(parsedPayload);

  sendResponse({
    res,
    success: true,
    data: result,
    statusCode: 200,
    message: 'Order created successfully!',
  });
});

// retrive all orders
const getAllOrders = errorHandlingAsync(async (req: Request, res: Response) => {
  const orders = await OrderService.getAllOrdersFromDB();

  sendResponse({
    res,
    success: true,
    data: orders,
    statusCode: 200,
    message: 'Orders fetched successfully!',
  });
});

// get single order by user email query
const getOrderByEmail = errorHandlingAsync(
  async (req: Request, res: Response) => {
    const email = req.query.email as string;

    const orders = await OrderService.getOrderByEmail(email);

    sendResponse({
      res,
      success: true,
      data: orders,
      statusCode: 200,
      message: 'Orders fetched successfully for user email!',
    });
  }
);

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
