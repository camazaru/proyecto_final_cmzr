import CartModel from '../models/cartModels.js'


const getCart = async({userID,ProductID}) =>{
    const data = await CartModel.find({ userID: userID},{ products: 1, _id: 0 })  
    return data
}

const getCartUserID = async (req) => {
  const userID = req.userID
  const ProductExist = await CartModel.find({ userID: userID})

  return ProductExist

}

const updateCartID = async (req) => {
  const userID = req.userID
  const product = req.product
  const UpdateProductCart = await CartModel.updateOne({ userID: userID},{ $set: { product : product }})

  return UpdateProductCart

}

const createCart = async(req) =>{
  const data = await CartModel.create(req)  
  return data
}

  export default {
    getCartUserID,
    updateCartID,
    getCart,
    createCart
  }