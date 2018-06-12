const Employee = require('../models/employee');

const employeecontroller = {};

employeecontroller.getEmployees = async (req, res) => {
    /* res.json({
        status: 'Employess goes here'
    }); */
    //asyn await en vez de callbacks o promises
    //
    const employees = await Employee.find();
    res.json(employees);
}

employeecontroller.createEmployee = async (req, res) => {
    console.log(req.body); //los datos que envia una app del cliente
    //nos permite hacer peticiones get, post, put, delete... POSTMAN
    const employee = new Employee(req.body);
    await employee.save();
    console.log(employee);
    // res.json('recibido');
    res.json({
        'status': 'Employee saved'
    });
}

employeecontroller.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    console.log(req.params.id);
    res.json(employee);
};

employeecontroller.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({
        status: 'Employee Updated'
    });
}

employeecontroller.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
}

module.exports = employeecontroller;