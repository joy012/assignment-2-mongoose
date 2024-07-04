import { Schema, model } from 'mongoose';
import {
  IProduct,
  TProductInventory,
  TProductVarient,
} from './product.interface';

const productVariantSchema = new Schema<TProductVarient>({
  type: {
    type: String,
    required: [true, 'Product Variant type is required'],
  },
  value: {
    type: String,
    required: [true, 'Product Variant value is required'],
  },
});

const productInventorySchema = new Schema<TProductInventory>({
  inStock: {
    type: Boolean,
    required: [true, 'Product inventory in-stock value is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product inventory quantity is required'],
  },
});

const product = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product Name is required'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product Category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product Tags are required'],
  },
  variants: {
    type: [productVariantSchema],
    required: [true, 'Product Variants are required'],
  },
  inventory: {
    type: productInventorySchema,
    required: [true, 'Product Inventory is required'],
  },
});

export const Product = model<IProduct>('Product', product);
