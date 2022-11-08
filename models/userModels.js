import mongoose from 'mongoose'
 
export default mongoose.model('Users',{
    email: String,
    password: String,
    address: String,
    avatar: String
});