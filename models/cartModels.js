import mongoose from 'mongoose'
 
export default mongoose.model('Cart',{
    userID: String,
    products: Array
});