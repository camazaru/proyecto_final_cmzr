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

const delteProduct = async (productId) => {
  await Product.deleteOne({ _id: productId });
};

const getProductbyID = async (req) => {
  const ProductID = req.ProductID
  const productnew = await ProductsModel.findById(ProductID)
  return productnew
}

export const productDao = {
    getAllProducts,
    createProduct,
    updateProduct,
    delteProduct,
    getProductbyID
  };