import { WSresponse } from "../libs/WSresponse.js";
import { cartService } from "../service/cartService.js";

const createCart = async (req, res) => {
    try {
      const response = await cartService.createCart(req.body);
      res.json(new WSresponse(response, "Cart created"));
    } catch (err) {
      console.log(err);
      res.status(400).json(new WSresponse(null, err, true, 400));
    }
  };



/*
const getOneCart = async (req, res) => {
    try {
      const response = await cartService.getOneCart(req.params.id);
  
      res.json(new WSresponse(response, "Succes"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 460));
    }
  };
*/

/*
  const updateCart = async (req, res) => {
    try {
      const response = await cartService.updateCart(
        req.body,
        req.params.id
      );
      res.json(new WSresponse(response, "Product updated"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 489));
    }
  };
*/

/*
  const deleteCart = async (req, res) => {
    try {
      await cartService.deleteCart(req.params.id);
  
      res.json(new WSresponse(null, "Cart deleted"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 320));
    }
  };
*/


export const cartController = {
    //getCarrito,
    createCart,
    //getOneCart,
    //updateCart,
    //deleteCart
}

/*
export default {
    getCarritoID,
    getCarrito,
    
}
*/