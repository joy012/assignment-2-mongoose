import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z
    .string({
      required_error: 'Product Variant type is required',
      invalid_type_error: 'Product Variant type should be a string',
    })
    .min(1, { message: 'Product Variant type can not be empty' }),
  value: z
    .string({
      required_error: 'Product Variant value is required',
      invalid_type_error: 'Product Variant value should be a string',
    })
    .min(1, { message: 'Product Variant value can not be empty' }),
});

const inventoryValidationSchema = z.object({
  inStock: z.boolean(),
  quantity: z.number(),
});

export const productValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Product Name is required',
      invalid_type_error: 'Product name should be a string',
    })
    .min(3, { message: 'Product Name should be atleast 5 characters' })
    .max(50, { message: 'Product Name should be at most 50 characters long' }),
  description: z
    .string({
      required_error: 'Product Description is required',
      invalid_type_error: 'Product Description should be a string',
    })
    .min(10, {
      message: 'Product Description should be at least 10 characters long',
    })
    .max(500, {
      message: 'Product Description should be at most 500 characters long',
    }),
  price: z
    .number({
      required_error: 'Product price is required',
      invalid_type_error: 'Product price should be a number',
    })
    .min(1, { message: 'Product price can not be empty' }),
  category: z
    .string({
      required_error: 'Category is required',
      invalid_type_error: 'Category should be a string',
    })
    .min(1, { message: 'Category can not be empty' }),
  tags: z
    .array(
      z.string({
        required_error: 'Product tag is required',
        invalid_type_error: 'Product tag should be a string',
      })
    )
    .min(1, { message: 'Product tags can not be empty' }),
  variants: z
    .array(variantValidationSchema)
    .min(1, { message: 'Product variants are required!' }),
  inventory: inventoryValidationSchema,
});
