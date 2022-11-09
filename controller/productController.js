import { WSresponse } from "../libs/WSresponse.js";
import { productService } from "../service/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await productService.getAllProducts();
    res.json(new WSresponse(response, "Success"));

  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};

export default {
    getAllProducts
    //createProduct,
    //getOneProduct,
    //updateProduct,
    //deleteProduct,
  };