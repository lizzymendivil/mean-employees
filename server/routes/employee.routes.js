const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller'); //contiene todas las funciones que puede hacer un empleado, add, delete, etc

/* router.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({
        status: 'Api Works'
    })
})*/ //cuando me pidan una peticion get a la ruta inicial del servidor, voy a enviar una respuesta que diga un mensaje
//pero estas rutas vamos a usarlas como nuestra RestAPI, para enviar y recibir datos en formato json

router.get('/', employee.getEmployees)
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.updateEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;