import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email should be a string',
    })
    .min(1, { message: 'Email can not be empty' })
    .email({ message: 'Invalid email address' }),

  productId: z
    .string({
      required_error: 'Product ID is required',
      invalid_type_error: 'Product ID should be a string',
    })
    .min(1, { message: 'Product ID can not be empty' }),
  price: z
    .number({
      required_error: 'Product price is required',
      invalid_type_error: 'Product price should be a number',
    })
    .min(1, { message: 'Product price can not be empty' }),
  quantity: z
    .number({
      required_error: 'Product quantity is required',
      invalid_type_error: 'Product quantity should be a number',
    })
    .min(1, { message: 'Product quantity can not be empty' }),
});
