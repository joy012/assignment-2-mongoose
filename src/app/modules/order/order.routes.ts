import { Router } from 'express';
import { OrderController } from './order.controller';

const orderRoutes = Router();

// /api/orders to create new order
orderRoutes.post('/', OrderController.createOrder);

// /api/orders to get all orders
orderRoutes.get('/', OrderController.getAllOrders);

// /api/orders?email= to get single order by user email
orderRoutes.get('/', OrderController.getOrderByEmail);

export default orderRoutes;
