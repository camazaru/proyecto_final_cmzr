import express, { application } from 'express'
import session from "express-session"
import compression from 'compression'
import { WSresponse } from "../libs/WSresponse.js";
//import passport from 'passport';
import bodyParser from "body-parser"
//import os from "os";
import path from "path"                                //Normalizar Rutas
//import datosLogin from '../Strategy/loginStrategy.js'
import { json } from "express";
import config from './config.js';                      // 
import connectDB from './controllersdb.js'
import {fileURLToPath} from 'url';                     //Normalizar Rutas
import { url } from 'inspector';

const __filename = fileURLToPath(import.meta.url);     //Normalizar Rutas
const __dirname = path.dirname(__filename);            //Normalizar Rutas

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

//app.use(json());

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

// Usar Rutas

app.get("/", (req, res) => {
res.render("index")
})

app.get("/products", (req, res) => {


})

//***********************************************************************************************************
import Users from "../models/userModels.js";



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