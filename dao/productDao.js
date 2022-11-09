import { Product } from "../models/productModels.js";

const getAllProducts = async () => {
  const Products = await Product.find();

  return Products;
};


export const productDao = {
    getAllProducts,
    //createProduct,
    //getProductById,
    //updateProduct,
    //delteProduct,
  };