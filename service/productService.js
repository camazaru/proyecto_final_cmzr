import { productDao } from "../dao/productDao.js";

const getAllProducts = async () => {
  const data = await productDao.getAllProducts();

  return data;
};




export const productService = {
    getAllProducts,
    //createProduct,
    //getOneProduct,
    //updateProduct,
    //deleteProduct,
  };
  

