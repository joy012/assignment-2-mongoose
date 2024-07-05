import { Product } from '../product/product.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

// Create new order in DB
const createOrderInDB = async (order: IOrder) => {
  const productID = order.productId;

  const product = await Product.findById(productID);

  // if product not found throw error
  if (!product) {
    throw new Error('Product not found!');
  }

  const inStockQuantity = product.inventory.quantity;

  // if product found but quantity is less than order quantity throw error
  if (inStockQuantity < order.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // if product found and quantity is equal to order quantity set quantity to 0 and inStock to false
  if (inStockQuantity === order.quantity) {
    product.inventory.quantity = 0;
    product.inventory.inStock = false;
  } else {
    // if product found and quantity is greater than order quantity set quantity to (inStock quantity - order quantity)
    product.inventory.quantity -= order.quantity;
  }

  await product.save();

  const result = await Order.create(order);

  return result;
};

// Get all orders from DB
const getAllOrdersFromDB = async () => {
  const result = await Order.find();

  return result;
};

// get single order by user email from DB
const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email });

  if (!result || result.length === 0) {
    throw new Error('Order not found');
  }

  return result;
};

export const OrderService = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrderByEmail,
};
