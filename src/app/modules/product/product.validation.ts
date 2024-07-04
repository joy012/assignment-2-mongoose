import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string().min(1, { message: 'Product Variant type is required' }),
  value: z.string().min(1, { message: 'Product Variant value is required' }),
});

const inventoryValidationSchema = z.object({
  inStock: z.boolean(),
  quantity: z.number(),
});

export const productValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Produt name is required' })
    .max(50, { message: 'Product Name should be at most 50 characters long' }),
  description: z
    .string()
    .min(10, {
      message: 'Product Description should be at least 10 characters long',
    })
    .max(500, {
      message: 'Product Description should be at most 500 characters long',
    }),
  price: z.number().min(1, { message: 'Product price is required!' }),
  category: z.string().min(1, { message: 'Product category is required!' }),
  tags: z.array(z.string()).min(1, { message: 'Product tags are required!' }),
  variants: z
    .array(variantValidationSchema)
    .min(1, { message: 'Product variants are required!' }),
  inventory: inventoryValidationSchema,
});
