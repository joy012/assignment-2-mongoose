import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

export const ProductService = {
  createProductInDB,
};
