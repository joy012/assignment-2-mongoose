import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'User email is required in order'],
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product id is required in order'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required in order'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required in order'],
  },
});

export const Order = model<IOrder>('Order', orderSchema);
