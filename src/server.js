import express, { application } from 'express'
import session from "express-session"
import compression from 'compression'
//import passport from 'passport';
import bodyParser from "body-parser"
//import os from "os";
import { json } from "express";
import path from "path"                                //Normalizar Rutas
import {fileURLToPath} from 'url';                     //Normalizar Rutas
import { url } from 'inspector';
//import datosLogin from '../Strategy/loginStrategy.js'
import { WSresponse } from "../libs/WSresponse.js";
import config from './config.js';                      // 
import connectDB from './controllersdb.js'

import router from '../routes/indexRoute.js'

const __filename = fileURLToPath(import.meta.url);     //Normalizar Rutas
const __dirname = path.dirname(__filename);            //Normalizar Rutas

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.use(json());

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

app.use(compression())
app.use(express.static(path.join(__dirname, '../views')))
app.use(express.json());



//***********************************************************************************************************
// Usar Rutas
app.use("/", router)


//***********************************************************************************************************

//app.use(express.urlencoded({ extended: true }));                     // lee datos de un formulario
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


app.listen(port)
console.log(`Server listening on port ${port}`)









/*

archivo viejo

import express, { json } from "express";
import session from "express-session"
import mongoose from "mongoose";
import config from "./config/config.js";
import routes from "./routes/index.js";
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import compression from 'compression'
import datosLogin from './components/LoginStategy.js'
import passport from 'passport';

const app = express();

app.use(json());
app.use(compression())
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: config.apisecret,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie:{
      httpOnly:false,
      secure: false,
      maxAge: config.tiemposession
  }
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use('register',datosLogin.registerStrategy)
passport.use('login',datosLogin.loginStrategy)

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    datosLogin.User.findById(id,done)
})
app.use(express.static(path.join(__dirname, '../views')))
app.engine('hbs', engine({
  defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
  layoutsDir: path.join(__dirname, '../views/layouts'),
  helpers: {
    Multiplicacion: function(precio,cantidad){
      return precio * cantidad
    }
  }
}))
app.set('view engine', '.hbs');
//Direccionamiento a las rutas
app.use("/", routes);

app.use("*", (req, res) => {
  res.sendStatus(404);
});




mongoose.connect(config.dbUrl).then(() => {
  console.log("Database connected!");
  app.listen(config.port, () => {
    console.log(`Server listening host http://localhost:${config.port}`);
  });
});


*/