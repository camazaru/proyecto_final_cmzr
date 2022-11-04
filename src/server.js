import express, { application } from 'express'
import session from "express-session"
import compression from 'compression'
import passport from 'passport';
import bodyParser from "body-parser"
import path from "path"                                //Normalizar Rutas
import datosLogin from '../Strategy/loginStrategy.js'
import config from './config.js';                      // 
import connectDB from './controllersdb.js'
import {fileURLToPath} from 'url';                     //Normalizar Rutas
import routes from "../routes/index.routes.js"  
const __filename = fileURLToPath(import.meta.url);     //Normalizar Rutas
const __dirname = path.dirname(__filename);            //Normalizar Rutas




const app = express()
const port = process.env.PORT || 5000


function print(objeto)
{
    console.info(util.inspect(objeto,false,12,true))
}

connectDB(config.database.dbUrl, (err) => {
  if (err) return datosLogin.logger.error("DB Connection error", err);
  console.log("DB Connected");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug')                                              //usar pug

// Static Files
//app.use(express.static(path.join(__dirname,'../public')))


app.use(compression())
app.use(express.static(path.join(__dirname, '../views')))
app.use(express.json());

// Usar Rutas
app.use(routes)




app.use(express.urlencoded({ extended: true }));                     // lee datos de un formulario
app.use(express.static('avatars'))


app.use(session({
    secret: config.api.apisecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        httpOnly:false,
        secure: false,
        maxAge: config.api.tiemposession,
    }
}))

app.use(passport.initialize());
app.use(passport.session());
//passport.use('register',datosLogin.registerStrategy)
passport.use('login',datosLogin.loginStrategy)

passport.serializeUser((user,done)=>{
  done(null,user._id)
})

passport.deserializeUser((id,done)=>{
  datosLogin.User.findById(id,done)
})







app.listen(port)
console.log(`Server listening on port ${port}`)