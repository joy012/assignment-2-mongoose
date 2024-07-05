import { Request, Response } from 'express';
import { errorHandlingAsync } from '../../utils/errorHandlingAsync';
import { sendResponse } from '../../utils/sendResponse';
import { OrderService } from './order.service';
import { orderValidationSchema } from './order.validation';

// Create new order
const createOrder = errorHandlingAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const parsedPayload = orderValidationSchema.parse(payload);

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
  const { email } = req.query;

  if (email) {
    const matchedOrder = await OrderService.getOrderByEmail(email as string);

    sendResponse({
      res,
      success: true,
      data: matchedOrder,
      statusCode: 200,
      message: 'Orders fetched successfully for user email!',
    });
    return;
  }

  const orders = await OrderService.getAllOrdersFromDB();

  sendResponse({
    res,
    success: true,
    data: orders,
    statusCode: 200,
    message: 'Orders fetched successfully!',
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
};
