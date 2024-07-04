import { Router } from 'express';
import { OrderController } from './order.controller';

const orderRoutes = Router();

// /api/orders to create new order
orderRoutes.post('/', OrderController.createOrder);

// /api/orders to get all orders or use email query to get orders by user email
orderRoutes.get('/', OrderController.getAllOrders);

export default orderRoutes;
