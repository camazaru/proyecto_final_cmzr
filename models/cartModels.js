import { Schema, model } from "mongoose";
 
const cartSchema = new Schema({
    userId: { type: String, required: true },
    products: { type: String, required: true },
});

const cartModel = model("cart", cartSchema);


export const Cart = cartModel;

/*
simon
import { Schema, model } from "mongoose";

const carritoSchema = new Schema({
  usuarioid: { type: String, required: true },
  productos: { type: Array, required: true },
});

export default model("carrito", carritoSchema);
*/
