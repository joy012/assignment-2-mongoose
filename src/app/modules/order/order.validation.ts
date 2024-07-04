import { Types } from 'mongoose';
import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),

  productId: z.instanceof(Types.ObjectId, {
    message: 'Product id is required',
  }),
  price: z.number().min(1, { message: 'Product price is required' }),
  quantity: z.number().min(1, { message: 'Product quantity is required' }),
});
