import {Strategy as LocalStrategy}  from 'passport-local'
import controllers from '../controller/indexController.js'
import bcrypt from 'bcrypt'
import User from '../models/modelsUser.js'

function hashPassword(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

function isvalidpassword(reqPassword,dbPassword){
    return bcrypt.compareSync(reqPassword,dbPassword)
}

const loginStrategy = new LocalStrategy(async (username,password,done)=>{
    try{
        const user = await controllers.LoginController.Login({username})
          

        if(!user || !isvalidpassword(password,user.password)){
            return done(null)
        }

        done(null,user)

    }catch(error)
    {
        logger.error('server.js error login')
        done('Error login',null)
    }
console.log("usuario registrado")
})

export default {
    //registerStrategy,
    loginStrategy,
    //logger,
    //User
}
