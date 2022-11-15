import { WSresponse } from "../libs/WSresponse.js";
import { productService } from "../service/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await productService.getAllProducts();
    
    //res.json(new WSresponse(response, "Success"));
    res.render("indexProducts", {ProductosDB:response[0].Productos, Categorias:response[0].Categorias} );

  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};

/*  
const getAllProducts = async (req, res) => {
  try {
    const response = await productService.getAllProducts();

    res.json(new WSresponse(response, "Succes"));
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};
*/



const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);
    res.json(new WSresponse(response, "Product created"));
  } catch (err) {
    console.log(err);
    res.status(400).json(new WSresponse(null, err, true, 400));
  }
};

const updateProduct = async (req, res) => {
  try {
    const response = await productService.updateProduct(
      req.body,
      req.params.id
    );

    res.json(new WSresponse(response, "Product updated"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 489));
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);

    res.json(new WSresponse(null, "Product deleted"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 320));
  }
};

const getOneProduct = async (req, res) => {
  try {
    const response = await productService.getOneProduct(req.params.id);

    res.json(new WSresponse(response, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 460));
  }
};

export const productController = {
    getAllProducts,
    createProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
  };