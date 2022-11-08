import mongoose from 'mongoose'
 
export default mongoose.model('PrefixCountry',{
    code: String,
    country: String
});
