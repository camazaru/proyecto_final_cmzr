import { productDao } from "../dao/productDao.js";

const getAllProducts = async () => {
  const data = await productDao.getAllProducts();

  return data;
};

const createProduct = async ({ name, price, thumbnail, category, description, stock }) => {
  await productDao.createProduct({ name, price, thumbnail, category, description, stock  });

  return { name, price, thumbnail, category, description, stock  };
};


const getOneProduct = async (productId) => {
  if (typeof productId !== "string") throw "Product ID must be string";

  const product = await productDao.getProductById(productId);

  if (!product) throw "Product doesn't exist";

  return product;
};

const updateProduct = async ({ title, price, stock }, productId) => {
  if (typeof title !== "string") throw "Title must be string";
  if (typeof price !== "number") throw "Price must be number";
  if (typeof stock !== "number") throw "Stock must be number";
  if (typeof productId !== "string") throw "Product ID must be string";

  const updatedProduct = await productDao.updateProduct(
    { title, price, stock },
    productId
  );

  return updatedProduct;
};

const deleteProduct = async (productId) => {
  if (typeof productId !== "string") throw "Product ID must be string";

  await productDao.delteProduct(productId);
};

export const productService = {
    getAllProducts,
    createProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
  };
  

/*
archvo viejo
import Product from "../models/product.model.js";
import ProductDTO from "../dto/product.dto.js"

const getAllProduct = async () => {
  const product = await Product.find().lean();
  const Categorias = await Product.distinct("category");
  let data=[]
  let productnew = []
  for (let i = 0; i < product.length; i++)
    {
      productnew.push({
        id: product[i]._id.toString(),
        name: product[i].name,
        price: product[i].price,
        thumbnail: product[i].thumbnail
      })
    }
    data=[{
      "Productos": productnew,
      "Categorias": Categorias
    }]

    //console.log("resultado service",data)
  return data;
};

const getProductByFilters = async (filters) => {
  const product = await Product.find(filters).lean();
  const Categorias = await Product.distinct("category");
  let data=[]
  let productnew = []
  for (let i = 0; i < product.length; i++)
    {
      productnew.push({
        id: product[i]._id.toString(),
        name: product[i].name,
        price: product[i].price,
        description: product[i].description,
        category: product[i].category,
        thumbnail: product[i].thumbnail
      })
    }
    data=[{
      "Productos": productnew,
      "Categorias": Categorias
    }]
    return data;
};

const createProduct = async (productToCreate) => {
  const createdProduct = await Product.create(productToCreate);

  //console.log(new ProductDTO(createdProduct))

  return new ProductDTO(createdProduct);
};

export default { getAllProduct,getProductByFilters, createProduct };


*/