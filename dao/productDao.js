import { Product } from "../models/productModels.js";

const getAllProducts = async () => {
  const Products = await Product.find();
  return Products;
};

const createProduct = async (productToCreate) => {
  const createdProduct = await Product.create(productToCreate);
  return createdProduct;
};

const updateProduct = async (updateData, productId) => {
  const updatedProduct = await Product.updateOne(
    { _id: productId },
    updateData
  );
  return updatedProduct;
};

const deleteProduct = async (productId) => {
  await Product.deleteOne({ _id: productId });
};

const getProductById = async (productId) => {
  const product = await Product.findById({_id: productId});

  return product;
};

/*
const getProductByCategory = async (category) => {
  const product = await Product.category.findByCategory({category});

  return product;
};
*/

const getProductByCategory = async (category) => {
  const Products = await Product.find({category});
  return Products;
};

export const productDao = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductByCategory
  };