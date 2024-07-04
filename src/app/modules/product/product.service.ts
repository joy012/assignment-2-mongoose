import { IProduct } from './product.interface';
import { Product } from './product.model';

// Create product in DB
const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

// Get single product from DB
const getSingleProductFromDB = async (productID: string) => {
  const product = await Product.findById(productID);

  return product;
};

// Get all products from DB
const getAllProductsFromDB = async () => {
  const products = await Product.find();

  return products;
};

// update a single product fully or partially
const updateProductInDB = async (
  productID: string,
  payload: Partial<IProduct>
) => {
  // using findOneAndUpdate and applying new true returns the updated document
  const product = await Product.findOneAndUpdate({ _id: productID }, payload, {
    new: true,
  });

  return product;
};

// delete a single product
const deleteProductFromDB = async (productID: string) => {
  const product = await Product.deleteOne({ _id: productID });

  return product;
};

// search products by query from DB
const searchProductFromDB = async (searchTerm: string) => {
  // options i is for case-insensitive search
  const searchRegex = { $regex: searchTerm, $options: 'i' };

  const products = await Product.find({
    $or: [
      { name: searchRegex },
      { description: searchRegex },
      { category: searchRegex },
      { tags: searchRegex },
      { 'variants.value': searchRegex },
    ],
  });

  return products;
};

export const ProductService = {
  createProductInDB,
  getSingleProductFromDB,
  getAllProductsFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductFromDB,
};
