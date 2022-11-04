// import path from "path"
const indexController = {}

indexController.inicio = (req, res)=>{
 res.render('index', {}) // res.render('index', {titulo: "Mi primera App", nombre: 'Carlos'})
    }

export default indexController